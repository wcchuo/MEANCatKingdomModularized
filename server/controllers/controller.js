var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
var catController = {};

catController.show = function(req, res) {
  	Cat.find({}, function(err, cats) {
    	if(err) {
      		console.log('Failed to connect to database or there is no data.');
    	} else { 
      		console.log('Successfully display cats!');
    	}
    	res.render('index', {cats : cats});
  	})
}

catController.new = function(req, res) {
	res.render('new');
}

catController.add = function(req, res) {
	console.log("POST DATA", req.body);
	var cat = new Cat({ genetic_classification: req.body.genetic_classification, lineage: req.body.lineage, subfamily: req.body.subfamily, genus: req.body.genus, scientific_name: req.body.scientific_name, name: req.body.name, description: req.body.description, photo: req.body.photo, comment: req.body.comment, datetime: req.body.datetime });

	cat.save(function(err) {
    	if(err) {
	      console.log('something went wrong');
	    } else { 
	      console.log('successfully added a cat!');
	    }
	})
	res.redirect('/');
}

catController.view = function(req, res) {
    Cat.findOne({_id: req.params.id}, function (err, cats) {
        res.render('view', {cats: cats});
    })
}

catController.edit = function(req, res) {
    Cat.findOne({_id: req.params.id}, function (err, cats) {
        res.render('edit', {cats: cats});
    })
}

catController.update = function(req, res) {
	Cat.update({_id: req.params.id}, { genetic_classification: req.body.genetic_classification, lineage: req.body.lineage, subfamily: req.body.subfamily, genus: req.body.genus, scientific_name: req.body.scientific_name, name: req.body.name, description: req.body.description, photo: req.body.photo, comment: req.body.comment, datetime: req.body.datetime
	}, function (err, cats){
	        res.redirect('/');
	})
}

catController.delete = function(req, res) {
	Cat.remove({_id: req.params.id}, function (err, cats){
    	res.redirect('/');
  	})
}

module.exports = catController;

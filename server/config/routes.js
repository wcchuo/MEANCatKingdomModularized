var cats = require('../controllers/controller.js');

module.exports = function(app) { 

	//render index page
	app.get('/', function(req, res) {
	  	cats.show(req, res);
	})

	//render the new page to post and invoke add
	app.get('/new', function(req, res) {
	  	cats.new(req, res);
	})

	//add document function
	app.post('/add', function(req, res) {
		cats.add(req, res);
	})

	//get the single record page
	app.get('/:id/view', function (req, res){
		cats.view(req, res);
	})

	//render edit page
	app.get('/:id/edit', function (req, res){
		cats.edit(req, res);
	})

	//update document function
	app.post('/edit/:id', function (req, res){ 
		cats.update(req, res);
	})

	//delete document function
	app.get('/:id/delete', function (req, res){
		cats.delete(req, res);
	})

}  //closing modile.exports
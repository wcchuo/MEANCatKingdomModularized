var mongoose = require('mongoose');
var CatSchema = new mongoose.Schema({
    genetic_classification: String,
    lineage: String,
    subfamily: String,
    genus: String,
    scientific_name: String,
    name: String,
    description: String,
    photo: String,
    comment: String,
    datetime: String
})

mongoose.model('Cat', CatSchema);

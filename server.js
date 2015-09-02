require("./server/config/mongoose.js");
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(8009, function() {
 console.log("listening on port 8009");
})
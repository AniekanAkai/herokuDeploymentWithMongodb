var express = require("express"),
	app = express(),
	port = process.env.PORT || 8080,
	bodyParser = require('body-parser'), 
	multer = require('multer'),
	logger = require('morgan'),
	mongoose = require("mongoose"),
	fs = require("file-system");
	
require("./models/person");

var peopleController = require("./controllers/person");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('common'));
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/mongooseDemo');

app.get("/people", peopleController.index);
app.post("/people", peopleController.newPerson);

app.listen(port, function(err){
	console.log("listening on %s", port);
});

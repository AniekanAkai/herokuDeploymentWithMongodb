var mongoose = require("mongoose"),
	Person = mongoose.model("person"),
	controller = {};


controller.index = [function(req, res, next){	
	Person.find({}, function(err, users){
		if(err) return next(err);
		res.render("users", {"users": users});
	});
}];

controller.newPerson = [
	function(req, res, next){
		console.log(req.body);
		if("name" in req.body && req.body.name !== ''){
			next();
		}else{
			res.send(404);
		}
	},
	function(req, res, next){
		var newuser = {"name":req.body.name, "email":req.body.email};
		Person.create(newuser,function(err,user) {
			if(err) return next(err);//Parameter 1 passed into next() means error occurred.
			res.redirect("/people");
		});
	}
];

module.exports = controller;
var express = require("express");
var router = express.Router();
var db = require("../models");

// Import the model (burger.js) to use its database functions
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
	db.Taco.findAll({}).then(function(data) {
		var hbsObject = {
			tacos: data
		};

		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	var newTaco = req.body.taco;
	console.log('newTaco is #{newTaco}');
	db.Taco.create({
		taco_name: newTaco
	}).then(function(data) {
		res.redirect("/");
		console.log(data);
	})
});

router.post("/:eatTaco", function(req, res) {
	var tacoId = req.body.tacoID;
	console.log('tacoId is ${tacoId}');
	db.Taco.update({
		devoured: true,
	}, {
		where: {
			id: tacoId
		}
	}).then(function(data) {
		console.log(data);
		res.redirect('/');
	})
});

// Export the router
module.exports = router;
var express = require('express');
var router = express.Router();
var Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res){
	/*Ninja.find().then(function(ninjas){
		res.send(ninjas);
	});*/
	Ninja.createIndex
	Ninja.geoNear(
			{type: "Point", coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
			{maxDistance:100000, spherical:true}
		).then(function(ninjas){
			res.send(ninjas)
		});
	console.log("GET request...");
});

router.post('/ninjas', function(req, res){
	//var ninja = new Ninja(req.body);
	//ninja.save();
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
		console.log("Ninja Created...")
	});
});

router.put('/ninjas/:id', function(req, res){
	Ninja.findByIDAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
		res.send(ninja);
		console.log("Ninja Updated...")
	})
console.log("GET request...");
});

router.delete('/ninjas/:id', function(req, res){
	Ninja.findByIDAndDelete({_id:req.params.id}).then(function(ninja){
		res.send(ninja);
		console.log("Ninja Deleted...")
});

module.exports = router;
var express = require('express');
var router = express.Router();
var Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res){
	Ninja.find().then(function(ninjas){
		res.send(ninjas);
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
res.send("PUT request from " + req.url);
res.send({
	name : "Javed",
	code : id
});
console.log("GET request...");
});

router.delete('/ninjas/:id', function(req, res){
res.send("DELETE request from req " + url);
console.log("GET request...");
});

module.exports = router;
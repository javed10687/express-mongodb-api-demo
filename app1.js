var express = require('express');

var app = express();

//Express provide following http methods
//GET
//POST
//PUT
//DELETE

app.get('/', function(req, res){
	res.send("<b>Hello this is simple get request response</b>");
	}
);

app.get('/about', function(req, res){
	res.send("<b>Hello this is about page. To be created..</b>");
	}
);

app.get('/contact', function(req, res){
	res.send("<b>Hello this is contact page. To be created...</b>");
	}
);


app.listen(3000, function(){
console.log("start listening at port 3000");
});
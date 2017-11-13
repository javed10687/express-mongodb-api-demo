var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/api');
var app = express();

//connect to mongodb
mongoose.connect("mongodb://mjsid:damnIT20@cluster0-shard-00-00-rjxv8.mongodb.net:27017,cluster0-shard-00-01-rjxv8.mongodb.net:27017,cluster0-shard-00-02-rjxv8.mongodb.net:27017/ninjago?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", {useMongoClient:true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);


app.listen(3000, function(){
console.log("start listening at port 3000");
});
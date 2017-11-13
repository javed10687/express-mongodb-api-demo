var http = require('http');
var events = require('events');
var fs = require('fs');

http.createServer(function(req, res){
console.log("starting server...");
res.writeHead(200, {'Content-Type':'text/html'});
var readStream = fs.createReadStream('test.html','utf8');
readStream.pipe(res);
}).listen(8080);

console.log("Server running at http://localhost:8080");
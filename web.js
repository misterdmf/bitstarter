var express = require('express');
var fs = require('fs');
var file = "index.html";
var content = fs.readFileSync(file);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require("express");
var app = express();
var formidable = require("formidable");

app.use(express.static(__dirname + '/WebCalculator'));
app.get('/', function (request, response) {
    response.redirect('calculator.html');
});

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);

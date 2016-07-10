var express = require("express");
var app = express();
var formidable = require("formidable");
var math = require("math_example");

app.use(express.static(__dirname + '/public'));

app.get('/addition', function (request, response) {
    var x = Number(request.query.x),
        y = Number(request.query.y),
        result = math.addition(x, y);
    writeResult(x, y, response, result, 'addition');
});

app.post('/subtraction', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var x = Number(fields.x),
            y = Number(fields.y),
            result = math.subtraction(x, y);
        writeResult(x, y, response, result, 'subtraction');
    });
});

app.put('/multiply', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var x = Number(fields.x),
            y = Number(fields.y),
            result = math.multiplication(x, y);
        writeResult(x, y, response, result, 'multiplication');
    });
});

app.delete('/divide', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var x = Number(fields.x),
            y = Number(fields.y),
            result = math.division(x, y);
        writeResult(x, y, response, result, 'division');
    });
});

function writeResult(x, y, response, result, mathType) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('{ "result": ' + result + '}');
    console.log('Handled ' + mathType + ' request for x=' + x + ' : y=' + y);
}

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);
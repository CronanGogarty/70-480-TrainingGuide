var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) { });
server.listen(1337, function () {
    console.log('Server is listening on port 1337 @ ' + (new Date()));
});

var wsServer = new WebSocketServer({
    httpServer: server //bind websocket server to http server
    //autoAcceptConnections: false
});

wsServer.on('request', function (request) {
    var connection = request.accept('gg-protocol', request.origin);
    console.log('Connection accepted at ' + (new Date()));

    //message received
    connection.on('message', function (message) {
        if (message.type === 'utf8') { //accept text only
            console.log('Received message: ' + message.utf8Data + ' at ' + (new Date()));
            connection.sendUTF(message.utf8Data.replace('server', 'client'));
        }
    });

    //client disconnected
    connection.on('close', function (reasonCode, description) {
        console.log('Peer ' + connection.remoteAddress + ' disconnected at ' + (new Date()));
    });
});


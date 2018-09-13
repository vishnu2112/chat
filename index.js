var express = require('express');
console.log("express is connected");
var app = express();
var socket = require('socket.io');
console.log("socket.io is connected to connect client and server");
var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000,');
});
app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    

});

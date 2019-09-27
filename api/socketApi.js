'use strict';
var socket_io = require('socket.io');
var sqlFunction = require('./sqlConnect.js');
var io = socket_io();
var socketApi = {};

socketApi.io = io;
/*===================socketIO====================*/

io.on('connection', function(socket) {
    console.log(socket.id + 'esp8266 connected!!!');
    socket.on('atime', function(data) {
        console.log(data);
    });
    socket.emit('message', {
        text: 'text',
    });
});

io.on('error', function() {
    console.log('errr');
});

/*===================socketIO====================*/
module.exports = socketApi;

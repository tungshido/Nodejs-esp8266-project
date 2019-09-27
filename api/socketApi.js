'use strict';
var socket_io = require('socket.io');
var sqlFunction = require('./sqlConnect.js');
var io = socket_io();
var socketApi = {};

socketApi.io = io;
/*===================socketIO====================*/

io.on('connection', socket => {
    socket.on('cycleTimeData', cycleData => {
        sqlFunction.writeData2Database(cycleData).then(
            socket.emit('cycleDataStatus', {
                status: 'received',
            }),
            socket.emit('cycleDataStatus', {
                status: 'failed',
            }),
        );
    });
});

io.on('error', () => {
    console.log('errr');
});

/*===================socketIO====================*/
module.exports = socketApi;

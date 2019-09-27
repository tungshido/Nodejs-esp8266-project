'use strict';
const socket_io = require('socket.io');
//const sqlFunction = require('./sqlConnect.js');
const io = socket_io();
const socketApi = {};

socketApi.io = io;
/*===================socketIO====================*/

io.on('connection', socket => {
    console.log(`connected ${socket.id}`);
    socket.on('atime', cycleData => {
        console.log(cycleData);
        /* sqlFunction.writeData2Database(cycleData).then(
            socket.emit('cycleDataStatus', {
                status: 'received',
            }),
            socket.emit('cycleDataStatus', {
                status: 'failed',
            }),
        ); */
    });
});

io.on('error', () => {
    console.log('errr');
});

/*===================socketIO====================*/
module.exports = socketApi;

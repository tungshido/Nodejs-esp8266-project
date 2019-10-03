'use strict';
const socket_io = require('socket.io');
const sqlFunction = require('../sql/cycleTime-insert');
const io = socket_io();
const socketApi = {};

socketApi.io = io;
/*===================socketIO====================*/

io.on('connection', socket => {
    console.log(`connected ${socket.id}`);
    socket.on('cycleTime', cycleData => {
        console.time('dbsave');
        insertCycleTime2Database(cycleData).then(
            value => {
                console.timeEnd('dbsave');
                console.log(value);
                if (value === 1) {
                    socket.emit('failed', 'machine not exist');
                } else if (value === 0) {
                    socket.emit('success', 'insert successfully');
                }
            },
            reason => {
                console.log(reason);
                socket.emit('failed', 'error on insert');
            },
        );
    });
});

async function insertCycleTime2Database(cycleData) {
    return await sqlFunction.writeData2Database(cycleData);
}

io.on('error', () => {
    console.log('errr');
});

/*===================socketIO====================*/
module.exports = socketApi;

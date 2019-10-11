const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};
const sqlStoredProcedure = require('../sql/sqlStoredProcedure');

socketApi.io = io;
/*===================socketIO====================*/

io.on('connection', socket => {
  console.log(`connected ${socket.id}`);
  socket.on('cycleTime', cycleData => {
    console.time('dbsave');
    sqlStoredProcedure.writeData2Database(cycleData).then(
      value => {
        console.timeEnd('dbsave');
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
io.on('error', () => {
  console.log('errr');
});

/*===================socketIO====================*/
module.exports = socketApi;

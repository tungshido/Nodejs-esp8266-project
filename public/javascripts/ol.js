var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', {
        my: 'data'
    });
});

$('.btn').on('click', function () {
var newData = [];
newData.push({
    'data': $('#value').val()
});
var dataJson = JSON.stringify(newData);
console.log(newData);
    $.ajax({
        url: '/data',
        data: dataJson,
        type: 'POST',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
        },
        error: function (e) {
            console.log(e);
        }
    });
});
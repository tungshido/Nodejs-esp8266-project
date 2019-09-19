var express = require('express');
var router = express.Router();
sqlConnection = require('../sqlConnect.js');
/* GET getData page. */
router.get('/', function (req, res) {
    res.render('data');
});
router.post('/', function (req, res) {
    //console.log(req.body);
    if (req.body) {
        try {
            res.contentType('application/json');
            res.setHeader("Access-Control-Allow-Origin", "*");
            const a = sqlConnection.writeData2Database().then(function(data) {
                console.log(data[1]);
            });
            //console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return res.send('Post success');
});
module.exports = router;

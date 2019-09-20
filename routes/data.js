var express = require('express');
var router = express.Router();
sqlConnection = require('../sqlConnect.js');
/* GET getData page. */
router.get('/', function (req, res) {
    res.render('data');
});
router.post('/', function (req, res) {
    if (req.body) {
        try {
            sqlConnection.writeData2Database().then(function (data) {
                res.send(JSON.stringify({
                    data
                }));
            });
        } catch (error) {
            console.log(error);
        }
    }
    return;
});
module.exports = router;

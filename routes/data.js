const express = require('express');
const router = express.Router();
const sqlConnection = require('../sql/sqlConnect');
/* GET getData page. */
router.get('/', function(req, res) {
    res.render('data');
});
router.post('/', (req, res) => {
    //console.log(req.body);
    if (req.body) {
        try {
            res.contentType('application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
        } catch (error) {
            console.log(error);
        }
    }
    return res.send('Post success');
});
module.exports = router;

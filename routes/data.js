const express = require('express');
const router = express.Router();
const dataQuery = require('../sql/cycleTimeQuery');
/* GET getData page. */
router.get('/', (req, res) => {
  console.time('query');
  const cycleData = new Promise(resolve => {
    resolve(dataQuery.dataQuery());
  });
  cycleData.then(value => {
    console.timeEnd('query');
    console.log('15');
    res.send(value);
  });
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

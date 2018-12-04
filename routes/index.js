var express = require('express');
var router = express.Router();
var calc = require('')

/* GET home page. */
router.post('/api/getCalc', function(req, res, next) {
  console.log(req.body)

  res.send({
    a: calc(req.body)
  });
});

module.exports = router;

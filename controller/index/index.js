/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/2 下午7:52
 * index.js
 */

var express = require('express');
var router = express.Router();
var calc = require('./fn/calc')

/* GET home page. */
router.post('/api/getCalc', function(req, res, next) {
  res.send(calc(req.body));
});

module.exports = router;
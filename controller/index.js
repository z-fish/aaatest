/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/2 下午7:52
 * index.js
 */

var express = require('express');
var router = express.Router();
var calc = require('./calc/calc');
var newsList = require('./lysub/newsList');
var newsDetail = require('./lysub/newsDetail');

/* GET home page. */
router.post('/api/getCalc', function(req, res, next) {
  if (!req.body) return res.send('null')
  res.send(calc(req.body));
});

router.post('/api/sub/news-list', function(req, res, next) {
  newsList().then(data => {
    res.send(data);
  })
});

router.post('/api/sub/news-detail', function(req, res, next) {
  if (!req.body) return res.send('null')
  newsDetail(req.body.id).then(data => {
    res.send(data);
  })
});

module.exports = router;
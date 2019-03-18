/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/2 下午7:52
 * index.js
 */

const express = require('express');
const router = express.Router();
let calc = require('./calc/calc');
let newsList = require('./lysub/newsList');
let newsDetail = require('./lysub/newsDetail');
let fileApi = require('./file')
let newsApi = require('./lysub/newsApi')

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

router.all('/api/file/upload', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method !== 'POST') return res.send('success')
  fileApi.upload(req.files.file).then(data => {
    res.send({
      code: 0,
      data: {
        url: data
      },
      msg: 'success'
    })
  })
});

router.all('/api/news/add', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method !== 'POST') return res.send('success')
  newsApi.add(req.body).then(data => {
    res.send({
      code: 0,
      data: data,
      msg: 'success'
    })
  })
});

module.exports = router;
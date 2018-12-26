/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/25 上午10:24
 * newsDetail.js
 */

let connectMysql = require('../../mysql/index')

let newsDetail = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'select * from ly_sub_news where id = ' + id + ' ;'
    connectMysql(sql, (err, results, fields) => {
      let data = results ? results[0] : null
      resolve(data)
    })
  })
}

module.exports = newsDetail
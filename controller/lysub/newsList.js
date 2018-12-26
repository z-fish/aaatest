/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/25 上午10:24
 * newsList.js
 */
let connectMysql = require('../../mysql/index')

let newsList = () => {
  return new Promise((resolve, reject) => {
    let sql = 'select id as id, title as title, des as des, time as time, shareImg as img from ly_sub_news ;'
    connectMysql(sql, (err, results, fields) => {
      resolve(results)
    })
  })
}

module.exports = newsList
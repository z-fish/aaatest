/**
 * Author azxsfghl@163.com
 * create by 2018/10/15 下午1:12
 * index.js
 */

const mysql = require('mysql')

function connectMysql(sql, callback) {
  let connection = mysql.createConnection({
    
  })

  connection.connect()

  connection.query(sql, (err, results, fields) => {
    callback && callback(err, results, fields)
  })
}

module.exports = connectMysql


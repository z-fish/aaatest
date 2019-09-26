let connectMysql = require('../../mysql/index')
let list = () => {
  return new Promise((resolve, reject) => {
    let sql = 'select id as id, name as name, time as time, text as text from ly_sub_message where status = 1 order by id asc ;'
    connectMysql(sql, (err, results, fields) => {
      console.log(err)
      resolve(results)
    })
  })
}
let submit = (message) => {
  return new Promise((resolve, reject) => {
    let sql = 'insert into ly_sub_message (name, time, text, status, avatarUrl) values("'+ message.name +'", "'+ Date.now() +'", "'+ message.text +'", "'+ 0 +'", "'+ message.avatarUrl +'");'
    connectMysql(sql, (err, results, fields) => {
      resolve({})
    })
  })
}

module.exports = {
  list,
  submit
}
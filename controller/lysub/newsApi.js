let connectMysql = require('../../mysql/index')
let add = (news) => {
  return new Promise((resolve, reject) => {
    let sql = 'insert into ly_sub_news (title, time, detail, shareTitle, shareImg, des) values("'+ news.title +'", "'+ news.time +'", "'+ news.detail +'", "'+ news.shareTitle +'", "'+ news.shareImg +'", "'+ news.des +'");'
    connectMysql(sql, (err, results, fields) => {
      resolve({})
    })
  })
}

module.exports = {
  add
}
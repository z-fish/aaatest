const fs = require('fs')

let upload = (file) => {
  return new Promise((resolve, reject) => {
    let data = fs.readFileSync(file.path)
    let type = file.type.split('/')[1]
    let name = Date.now() + '.' + type
    fs.writeFileSync('/data/static/' + name, data)
    resolve(name)
  })
}

module.exports = {
  upload
}
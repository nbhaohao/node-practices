const fs = require('fs')
const rs = fs.createReadStream('./demo.jpg')
const ws = fs.createWriteStream('./2.jpg')

rs.pipe(ws)
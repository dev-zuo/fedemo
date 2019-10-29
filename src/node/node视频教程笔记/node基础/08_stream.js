
// 复制一个图片，就需要使用stream 流了。
const fs = require('fs')
const rs = fs.createReadStream('./img.png')
const ws = fs.createWriteStream('./img2.png')
rs.pipe(ws)

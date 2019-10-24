
const fs = require('fs')

// // 1. 同步调用
// const data = fs.readFileSync('./04_download.js')
// console.log(data)

// // data内容打印如下，为Buffer对象，读取的是二进制数据
// // <Buffer 0a 6d 6f 64 75 6c 65 2e 65 78 70 6f 72 74 73 2e 64 6f 77 6e 6c 6f 
// // 61 64 52 65 70 6f 20 3d 20 61 73 79 6e 63 20 66 75 
// // 6e 63 74 69 6f 6e 20 28 72 65 70 ... >

// console.log(data.toString()) // 将Buffer转换为字符串
// // 打印内容如下:
// // 
// // module.exports.downloadRepo = async function (repo, dest) {
// //   const { promisify } = require('util')
// //   const download = promisify(require('download-git-repo'))
// //   const ora = require('ora')
// //   const process = ora(`正在下载 ${repo} 到 ${dest} 目录...`).start()

// //   try {
// //     await download(repo, dest) // 下载
// //   } catch(e) {
// //     process.fail('失败')
// //   }

// //   process.succeed('下载成功!')
// // }



// // 2. 异步调用
// fs.readFile('./04_download.js', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// 3. promisify处理异步调用
async function consoleFileData(filePath) {
  let { promisify } = require('util')
  let readFile = promisify(fs.readFile)

  try {
    let data = await readFile(filePath)
    console.log(data)
  } catch(e) {
    throw err
  }
}

consoleFileData('./04_download.js')
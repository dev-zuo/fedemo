
// // 1. os模块
// // http://nodejs.cn/api/os.html#os_os_freemem
// // os.freemem() 方法以整数的形式回空闲系统内存的字节数(B)。
// // os.totalmem() 方法以整数的形式返回所有系统内存的字节数(B)。
// const os = require('os')

// console.log('闲置内存:', os.freemem() / (1000*1000) + 'M')
// console.log('总内存:', os.totalmem() / (1000*1000) + 'M' )

// console.log(os.type()) // Darwin 
// console.log(os.release()) // 18.7.0  操作系统发行版本
// console.log(os.hostname()) // kevindeMacBook-Air.local
// console.log(os.homedir()) // /Users/kevin
// console.log(os.cpus()) // 打印cpu内核信息，包括cpu具体型号
// console.log(os.userInfo()) // 当前用户信息



// // 2. download-git-repo' 模块
// // 使用第三方模块 download-git-repo
// const download = require('download-git-repo')
// download('github:zuoxiaobai/todo', 'test', err => {
//   console.log(err ? err : 'OK')
// })



// // 3. download-git-repo + ora模块
// // 优化，加入下载过程中的提示
// const download = require('download-git-repo')
// const repo = 'github:zuoxiaobai/todo'
// const dest = 'test'
// const ora = require('ora') 

// const process = ora(`正在下载 ${repo} 到 ${dest} 目录...`).start()

// download(repo, dest, err => {
//   console.log(err ? err : 'OK')
//   if (err) {
//     process.fail(err)
//   } else {
//     process.succeed('下载成功')
//   }
// })



// // 4. 再次在优化 内置util模块promisify
// async function downloadRepo(repo, dest) {
//   const { promisify } = require('util')
//   const download = promisify(require('download-git-repo'))
//   const ora = require('ora')
//   const process = ora(`正在下载 ${repo} 到 ${dest} 目录...`).start()

//   try {
//     await download(repo, dest) // 下载
//   } catch(e) {
//     process.fail('失败')
//   }

//   process.succeed('下载成功!')
// }
// const repo = 'github:zuoxiaobai/todo'
// const dest = 'test'
// downloadRepo(repo, dest)


// 5.封装为模块后，再次调用
const repo = 'github:zuoxiaobai/todo'
const dest = 'test'
let { downloadRepo } = require('./04_download')

downloadRepo(repo, dest)
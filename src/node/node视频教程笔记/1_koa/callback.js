
// 1.一般 node调用api使用的是callback方式
fun('./index1.js', (err, data) => {
  console.log(err ? 'read err' : data)
})
// 模拟实现
function fun(arg, callback) {
  try {
    aaa() // 执行一些内部操作
    callback(null, 'result') // 如果执行成功，err设置为null, 结果通过第二参数返回
  } catch(e) {
    callback(e)
  }
}

// 通过 promisify 改造后的fun函数
const { promisify } = require('util')
const promisefun = promisify(fun)

// 2.promise方式调用
promisefun('./index1.js').then((data) => {
  console.log(data)
}, (err) => {
  // 如果后面有.catch 这里的优先级会高一点
  console.log('read err')
})
// 或者
promisefun('./index1.js').then((data) => {
  console.log(data)
}).catch(err => {
  console.log('read err')
})

// 3.通过async/await 调用promise函数
// await 需要用 async 函数包裹
setTimeout(async () => {
  try {
    let data = await promisefun('./index1.js')
    console.log(data)
  } catch(e) {
    console.log('read err')
  }
}, 0)
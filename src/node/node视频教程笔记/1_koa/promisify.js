
// 普通callback方式
function fun(arg, callback) {
  try {
    aaa() // 执行一些内部操作
    callback(null, 'result', 'result2') // 如果执行成功，err设置为null, 结果通过第二参数返回
  } catch(e) {
    callback(e)
  }
}

function promisify(fun) {
  // 生成的函数，会接收一个参数arg，数据和错误，需要我们在promise内部用reject或resolve传出结果
  return function(...args) {
    // 将传入的参数保存到args数组
    return new Promise((resolve, reject) => {
      // 将callback函数push到参数数组里，再间接调用fun
      args.push((err, result) => {
        // 如果fun函数执行成功会执行该函数并传入 (null, result)
        // 如果fun函数执行错误会执行该函数并传入 (err)
        // resolve() 只能接受并处理一个参数，多余的参数会被忽略掉。 spec上就是这样规定。
        // 如果回调函数，传出了多个参数，可以将该函数result换为 ...result
        // 然后resove时判断下，如果 result数组长度为0 直接resolve(result[0])，否则resove(result数组)，接收参数时需要注意
        err ? reject(err) : resolve(result)
      })
      fun.apply(null, args)
    })
  }
}

let promisefun = promisify(fun)

// 测试 promise方式调用
promisefun('./index1.js').then((data) => {
  console.log(data)
}, (err) => {
  // 如果后面有.catch 这里的优先级会高一点
  console.log('read err')
})
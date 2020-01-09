
(async () => {
  await test() // await fn()
  console.log('异步执行完成')
})()

async function test() {
  fn() // return fn() 或 await fn()
}

async function fn(next) {
  console.log('start fn')
  await delay()
  console.log('end fn')
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

// return fn()  或 await fn() 结果
// start fn
// end fn
// 异步执行完成

// fn() 结果
// start fn
// 异步执行完成
// end fn

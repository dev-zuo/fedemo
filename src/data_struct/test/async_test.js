// let assert = require('assert')

// 需要异步操作才能知道结果的函数
function asyncOpt(cb) {
  setTimeout(() => cb(1 === 1), 1500)
}

function asyncOptPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1 === 1) {
        resolve()
      } else {
        reject('不相等') // 也可以是 reject(new Error('不相等'))
      }
    }, 1000)
  })
}

describe('异步测试', function () {
  it('asyncOpt 正确执行应该返回 true', async function() {
    // this.timeout(5000);
    this.slow(2000)
    // this.timeout(1000);
    await asyncOptPromise()
  })
})

// describe('异步测试', () => {
//   it('asyncOpt 正确执行应该返回 true', () => {
//     return asyncOptPromise()
//   })
// })

// describe('异步测试', () => {
//   it('asyncOpt 正确执行应该返回 true', (done) => {
//     asyncOpt((isTrue) => {
//       if (isTrue) {
//         done() // 测试 pass
//       } else {
//         done('是错误的值') // 测试 fail
//         // 当然也可以是 done(new Error('是错误的值'))
//       }
//     })
//   })
// })
async function fn1(next) {
  console.log('start fn1')
  await delay()
  await next()
  console.log('end fn1')
}

async function fn2(next) {
  console.log('start fn2')
  await delay()
  await next()
  console.log('end fn2')
}

async function fn3(next) {
  console.log('start fn3')
  await delay()
  await next()
  console.log('end fn3')
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

function compose(fns) {
  return function() {
    return dispatch(0)
    function dispatch(i) {
      let fn = fns[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(() => {
          // dispatch(i + 1)
          return dispatch(i + 1)
        })
      )
    }
  }
}
const finalFn = compose([fn1, fn2, fn3]) // [fn1, fn2, fn3] middlewares
finalFn()

// 执行结果
// start fn1   
// 2s
// start fn2   
// 2s
// start fn3
// 2s
// end fn3
// end fn2
// end fn1

// 思考：将next的函数里面 return dispatch(i + 1) 改为 dispatch(i + 1)
// 执行结果
// start fn1
// 2s
// start fn2
// end fn1
// 2s
// start fn3
// end fn2
// 2s
// end fn3
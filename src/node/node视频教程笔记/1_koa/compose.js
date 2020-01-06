

async function fn1(next) {
  console.log('start fn1')
  await next()
  console.log('end fn1')
}
async function fn2(next) {
  console.log('start fn2')
  await next()
  console.log('end fn2')
}
function fn3(next) {
  console.log('start fn3')
}

function compose(fns) {
  return function() {
    return dispatch(0)
    function dispatch(i)
  }
}
const finalFn = compose([fn1, fn2, fn3]) // [fn1, fn2, fn3] middlewares
finalFn()
const Koa = require('koa')
const app = new Koa()

// 也会被请求 /favicon.ico

app.use(async (ctx, next) => {
  // log日志
  let dateS = +(new Date())

  await next() // 先去处理后面的中间件，都处理完后再向下执行

  let dateE = +(new Date())
  console.log(`请求耗时${dateE - dateS}ms`)
})

app.use((ctx, next) => {
  ctx.body = {
    name: 'Tom'
  }
  next()
})

app.use((ctx, next) => {
  console.log(ctx.url)
  if (ctx.url === '/html') {
    ctx.body = `你的名字是${ctx.body.name}`
  }
})

app.listen(3000)
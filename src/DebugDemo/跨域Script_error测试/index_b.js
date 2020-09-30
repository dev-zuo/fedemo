
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true', // 允许携带cookie
    'Access-Control-Max-Age': 3600 // 对于相同的请求，仅在第一次发送options预检请求，之后1小时内不需要预检请求
  })
  await next()
})

app.use(require('koa-static')(__dirname + '/public'))

app.listen('5002', () => {
  console.log('server listen on 5002 port')
})
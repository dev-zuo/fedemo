const Koa = require('koa')
const app = new Koa()
const intercept = require('./intercept')

// 请求拦截中间件
app.use(intercept)

app.use((ctx, next) => {
  ctx.body = 'hello'
})
app.listen(3000)
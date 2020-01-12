
const Koa = require('koa')
const app = new Koa()

// 静态服务，让访问 127.0.0.1:3000时可以直接访问index
app.use(require('koa-static')(__dirname + '/'))

app.use(require('koa-bodyparser')())
app.use((ctx, next) => {
  console.log(ctx.request.body) // { title: 'abc' }
  ctx.body = ctx.request.body
})

app.listen(3000, () => { console.log('服务开启于3000端口') })


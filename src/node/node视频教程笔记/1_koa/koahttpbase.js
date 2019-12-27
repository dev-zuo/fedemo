const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  ctx.body = {
    name: 'Tom'
  }
})

app.listen(3000)
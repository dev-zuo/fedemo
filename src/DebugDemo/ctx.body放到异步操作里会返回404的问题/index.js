
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  setTimeout(() => {
    ctx.body = {
      msg: '成功'
    }
  }, 0)
})

app.listen(9000, () => {
  console.log('server is start on 9000 port')
})

let koa = require('koa');
let Router = require('koa-router')

let app = new koa()
let router = new Router()

router.post('/user', ctx => {
  ctx.body = {
    a: 1
  }
})

// app.use(router.routes())
app.use(router.routes()).use(router.allowedMethods())

app.listen('9000', () => {
  console.log('server listen on 9000 port')
})
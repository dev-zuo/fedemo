
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(require('koa-static')(__dirname + '/public'))

router.post('/user', async (ctx, body) => {
  ctx.body = {
    code: 0,
    msg: '成功'
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000', () => {
  console.log('server listen on 3000 port')
})
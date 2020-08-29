const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/api/info', ctx => {
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen('9002', () => { console.log('server listen on 9092 port.') })
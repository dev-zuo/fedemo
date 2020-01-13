const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

app.use(require('koa-static')(__dirname + '/'))
app.use(require('koa-bodyparser')())

let msgList = []

router.post('/api/send', (ctx, next) => {
  let { body } = ctx.request
  body.msg && msgList.push(body.msg)
  ctx.body = 'success'
})

router.post('/api/clear', (ctx, next) => {
  msgList = []
  ctx.body = 'success'
})

router.get('/api/list', (ctx, next) => {
  ctx.body = msgList
})

app.use(router.routes())
app.listen(3000, () => console.log('服务开启成功，3000端口'))
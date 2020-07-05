
// http缓存测试
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(require('koa-static')(__dirname + '/public'))

router.get('/listData', ctx => {
  console.log('recive req', ctx.url)
  // ctx.set('Expires', new Date(+new Date() + 3600 * 1000))
  ctx.set("Cache-control", "max-age=3600") 
  ctx.body = {
    info: 'hello world'
  }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(9000, () => {
  console.log('server start on 9000 port')
})
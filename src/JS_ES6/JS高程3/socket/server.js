const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(require('koa-static')(__dirname + '/public'))

router.use('/test', ctx => {
  console.log(ctx)
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('server listen on 3000'))
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
app.use(require('koa-bodyparser')())
const router = new Router()

router.get('/user', ctx => {
  ctx.body = {
    a: 1
  }
})

router.post('/user', ctx => {
  console.log(ctx)
  console.log(ctx.request.body)
  ctx.body = {
   code: 200,
   msg: 'Success',
   data: {
     b: 1
   }
  }
})

app.use(router.routes())

app.listen(8000, () => console.log('server listen on 8000 port'))

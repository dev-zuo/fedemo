
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

app.use(new require('koa-static')('./public'))

router.get('/user', ctx => {
  ctx.set({
    // 'Set-Cookie': 'token=123;domain=;path=/;max-age=100;HttpOnly',
    'Set-Cookie': ['token=123;path=/;max-age=100;HttpOnly','mark=9;path=/;max-age=60;']
  })
  ctx.body = {
    name: '张三',
    age: 20
  }
})

router.put('/user', ctx => {
  // ctx.set({
  //   'cookie': 'a=1'
  // })
  ctx.body = {
    code: 0,
    data: {},
    msg: '成功'
  }
})

app.use(router.routes())
app.listen(9000, () => {
  console.log('server listen on 9000 port')
})
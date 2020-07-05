
// http缓存测试 week
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const calcMd5 = require('./md5')

const fs = require('fs')

app.use(require('koa-static')(__dirname + '/public'))

router.get('/listData', (ctx, next) => {
  console.log('recive req', ctx.url)
  let md5 =  calcMd5('./public/index.html')
  ctx.set("Cache-control","no-cache");
  ctx.set('ETag', md5)
  if (ctx.headers['if-none-match'] && ctx.headers['if-none-match'] === md5) {
    console.log("304");
    ctx.status = 304
  } else {
    ctx.body = {
      info: 'hello world'
    }
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(9000, () => {
  console.log('server start on 9000 port')
})
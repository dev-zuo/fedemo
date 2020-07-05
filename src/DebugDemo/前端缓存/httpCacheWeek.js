
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
  let fileInfo = fs.statSync('./public/index.html')
  let mtime = fileInfo.mtime
  // console.log(fileInfo, fileInfo.mtime)
  // 响应头设置后，下次这个请求会在请求头自动加上 If-Modified-Since: Sat Jul 04 2020 21:19:30 GMT+0800 (GMT+08:00) 字段
  console.log(ctx.headers)
  ctx.set("Cache-control","no-cache");
  ctx.set("Last-Modified", mtime)
  if (ctx.headers['if-modified-since'] && ctx.headers['if-modified-since'] == mtime) {
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
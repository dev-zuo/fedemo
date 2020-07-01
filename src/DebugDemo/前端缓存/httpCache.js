
// http缓存测试

const koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const app = new koa()
const router = new KoaRouter()
const static = new KoaStatic(__dirname + './public')

app.use(static)

router.get('/listData', ctx => {
  console.log('recive req', ctx.url)
  ctx.set('Expires', +new Date() + 3600 * 1000)
  ctx.body = {
    info: 'hello world'
  }
})

app.listen('9000', () => {
  console.log('server start on 9000 port')
})
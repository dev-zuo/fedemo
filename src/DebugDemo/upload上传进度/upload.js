
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const BodyParser = require('post-bodyparser')

const router = new Router()
const app = new Koa()

app.use(static(__dirname + '/'))

router.post('/upload', async (ctx, next) => {
  console.log('upload', ctx.url)
  let { req } = ctx.request
  const parser =  new BodyParser(req);
  let body = await parser.formData()
  console.log(body)
  ctx.body = body
})


app.use(router.routes())

app.listen(3000)
const Koa = require('koa')
const app = new Koa()
const Router = require('./router')
const router = new Router()

router.get('/', async ctx => { ctx.body = 'home page' })
router.get('/index', async ctx => { ctx.body = 'index page'})
router.get('/post', async ctx => { ctx.body = 'post page' })
router.get('/list', async ctx => { ctx.body = 'list page' })
router.post('/config', async ctx => {
  ctx.body = { 
    code: 200,
    msg: 'ok',
    data: { a: 1 }
  }
})

// 请求拦截中间件
app.use(router.routes())

app.use((ctx, next) => {
  ctx.body = '404'
})

app.listen(3000)
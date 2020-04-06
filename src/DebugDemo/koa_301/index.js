
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  console.log(ctx.url)
  if (ctx.url === '/test') {
    // 当访问 /test 时 301重定向到 http://www.zuo11.com
    ctx.status = 301
    ctx.set({
      'Location': 'http://www.zuo11.com'
    })
    return
  }
  // 非 /test 时，页面显示 welcome
  ctx.body = 'welcome'
})

app.listen('9000', () => { console.log('服务已开启，9000端口') })
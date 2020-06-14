
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    await asyncOpt()
    ctx.body = {
      msg: '成功'
    }
})

function asyncOpt() {
  return new Promise(r => setTimeout(()=> r(), 2000))
}

app.listen(9000, () => {
  console.log('server is start on 9000 port')
})
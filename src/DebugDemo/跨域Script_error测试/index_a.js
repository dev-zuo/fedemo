

const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')(__dirname + '/public'))

app.listen('5001', () => {
  console.log('server listen on 5001 port')
})
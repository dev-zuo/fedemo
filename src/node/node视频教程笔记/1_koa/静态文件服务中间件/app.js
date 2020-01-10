const Koa = require('koa')
const app = new Koa()
const static = require('./static')
const Logger = require('./log')
const logger = new Logger()

// 日志中间件
app.use(logger.log())

app.use(static(__dirname + '/public'))

app.listen(3000, () => {
  console.log('服务已开启，端口号3000')
})
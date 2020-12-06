const Koa = require('koa')
const app = new Koa()
app.use(request('koa-static')(__dirname))

app.listen(5000, () => console.log)

const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
app.use(new KoaStatic(path.resolve(__dirname, './files')))

app.listen(8081, () => console.log('服务开启于 8081 端口'))
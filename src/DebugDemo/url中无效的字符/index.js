
const koa = require('koa')
const app = new koa()

app.use(ctx => {
    console.log(ctx.url)
})

app.listen(4000, () => {
    console.log('server is listen on 4000')
})
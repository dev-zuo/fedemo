const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000))

const Koa = require('./myKoa2')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '5'
})

app.use(async (ctx, next) => {
  ctx.body += '2'
  await next()
  ctx.body += '4'
})

app.use((ctx, next) => {
  ctx.body += '3'
  next()
}).use((ctx, next) => {
  ctx.body += 'end'
})

app.listen(3000)
const MyKoa = require('./myKoa')
const app = new MyKoa()

// app.use((ctx, next) => {
//   ctx.body = {
//     name: 'Tom'
//   }
// })

// app.use((req, res) => {
//   console.log('执行了app.use')
//   res.end('hello')
// })

app.use((ctx) => {
  // console.log(ctx)
  ctx.body = 'hello'
})

app.listen(3000, (err, data) => {
  console.log('监听端口3000')
})
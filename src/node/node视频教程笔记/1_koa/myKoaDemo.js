const MyKoa = require('./myKoa')
const app = new MyKoa()

// app.use((ctx, next) => {
//   ctx.body = {
//     name: 'Tom'
//   }
// })

app.use((req, res) => {
  console.log('执行了app.use')
  res.end('1212')
})

app.listen(3000, (err, data) => {
  console.log(err, data)
})
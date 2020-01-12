
const Koa = require('koa')
const app = new Koa()

// 静态服务，让访问 127.0.0.1:3000时可以直接访问index
app.use(require('koa-static')(__dirname + '/'))

app.use((ctx, next) => {
  const { req } = ctx.request
  let reqData = []
  let size = 0

  // 处理post请求发送的数据
  req.on('data', data => {
    console.log('>>>req on', data) // >>>req on <Buffer 74 69 74 6c 65 3d 61 62 63>
    reqData.push(data)
    size += data.length
  })

  req.on('end', () => {
    console.log('end')
    const data = Buffer.concat(reqData, size)
    console.log('data:', size, data.toString()) //  data: 9 title=abc
  })
})

app.listen(3000, () => { console.log('服务开启于3000端口') })


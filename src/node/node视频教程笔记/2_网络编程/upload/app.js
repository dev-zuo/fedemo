
const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs = require('fs')

// 静态服务，让访问 127.0.0.1:3000时可以直接访问index
app.use(require('koa-static')(__dirname + '/'))
app.use(require('koa-bodyparser')())

app.use((ctx, next) => {
  // 如果是上传文件，Content-Type为 multipart/form-data，bodyparser会无效
  console.log(ctx.request.body)
  let { req } = ctx.request
  let fileName = req.headers['file-name'] ? req.headers['file-name'] : '123.png'
  const outputFile = path.resolve(__dirname, fileName)

  // 1.使用流的方法
  // const fis = fs.createWriteStream(outputFile)
  // console.log(req.pipe)
  // req.pipe(fis)

  // 2.使用buffer方法
  let chunk = []
  let size = 0
  req.on('data', data => {
    chunk.push(data)
    size += data.length;
    console.log('data: ', data, size)
  })
  req.on('end', () => {
    console.log('end..')
    const buffer = Buffer.concat(chunk, size)
    size = 0
    fs.writeFileSync(outputFile, buffer)
  })

  // 3.流事件写入
  // const fis = fs.createWriteStream(outputFile)
  // req.on('data', data => {
  //   console.log('data:', data)
  //   fis.write(data)
  // })
  // req.on('end', () => {
  //   fis.end()
  // })

  ctx.body = 'hello'
})

app.listen(3000, () => { console.log('服务开启于3000端口') })


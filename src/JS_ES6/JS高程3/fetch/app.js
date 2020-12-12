const Koa = require('koa')
const Router = require('koa-router')
const multer = require('@koa/multer')
const fs = require('fs')
const app = new Koa()
const router = new Router()

app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-bodyparser')())

router.post('/user', async ctx => {
  console.log(ctx, ctx.request.body, ctx.query, ctx.request)
  // asf // 故意制造错误
  // ctx.body = '121'

  // await new Promise(r => setTimeout(() => r(), 3600 * 1000))
  ctx.body = "abc"
})


// 文件上传处理
// 前端 append 文件时使用的是 image 字段
let singleFileConfig = multer().single('image')
let multipleFilesConfig = multer().fields([
  {
    name: 'image',
    maxCount: 5
  }
])
let isMultiple = true
let fileConfig = isMultiple ? multipleFilesConfig : singleFileConfig
router.post('/upload', fileConfig ,async ctx => {

  // 文件外的其他 FormData数据 { param1: 'abc' }
  console.log('ctx.request.body', ctx.request.body) 
  console.log('ctx.files', ctx.files) // 多文件，返回 { 字段1: [文件数组], 字段2 [文件数组] }
  console.log('ctx.file', ctx.file) // 单文件，返回 file 对象

  // 如果是单文件取文件内容，如果是多文件，取第一个文件，前端字段传的 image
  let file = isMultiple ? ctx.files['image'][0] : ctx.file
  isMultiple && console.log(`ctx.files['image']`, ctx.files['image'][0])

  // 在服务端本地创建文件
  let { originalname, buffer } = file
  fs.writeFileSync(originalname, buffer)
  // {
  //   fieldname: 'image',
  //   originalname: '截屏2020-12-10 下午8.01.44.png',
  //   encoding: '7bit', 
  //   mimetype: 'image/png',
  //   buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 03 18 00 00 01 56 08 06 00 00 00 ea b0 3b 51 00 00 0c 64 69 43 43 50 49 43 43 20 50 72 6f 66 69 ... 90135 more bytes>,
  //   size: 90185
  // }
  ctx.body = ctx.request.body 
})

app.use(router.routes()).use(router.allowedMethods())
app.listen('8888', () => console.log('server start on 8888')) 
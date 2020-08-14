
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

/**
 * @description 使用nodemailer发送邮件
 * @example
 * POST http://127.0.0.1:9000/sendEmail
 */
router.get('/sendEmail', async ctx => {
  try {
    let sendEmail = require('./sendEmail/index.js')
    await sendEmail()
    ctx.body = {
      msg: '成功'
    }
  } catch (e) {
    ctx.body = {
      msg: e.message
    }
  }
})

/**
 * @description 根据接口生成echarts图片
 * @example
 * GET http://127.0.0.1:9000/png?type=a
 * GET http://127.0.0.1:9000/png?type=b
 */
router.get('/png', async ctx => {
  try {
    let getEchartsPng = require('./echartsPng/index.js')
    let optionsA = require('./echartsPng/optionsA.js')
    let optionsB = require('./echartsPng/optionsB.js')
    let data = await getEchartsPng(ctx.query.type === 'a' ? optionsA : optionsB)
    ctx.set({
      'content-type': 'image/png'
    })
    ctx.body = data
  } catch (e) {
    console.log(e)
    ctx.body = {
      msg: e.message
    }
  }
})

app.use(router.routes())

app.listen('9000', () => {
  console.log('server start on 9000 port')
})


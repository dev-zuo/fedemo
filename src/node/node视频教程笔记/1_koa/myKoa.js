const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class MyKoa {

  // app.use 调用 app.use(callback)
  use(callback) {
    this.callback = callback
  }

  listen(...args) {
    console.log(args)
    const server = http.createServer((req, res) => {
      //this.callback(req, res)
      // 需要先创建上下文
      let ctx = this.createContext(req, res)
      this.callback(ctx)
      res.end(ctx.body)
    })
    server.listen(...args)
  }

  createContext(req, res) {
    // 先继承一些我们写的对象
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx
  }
}

module.exports = MyKoa
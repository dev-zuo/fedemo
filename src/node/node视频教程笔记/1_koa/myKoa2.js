const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class MyKoa {
  // app.use 调用 app.use(callback)
  constructor() {
    this.middlewares = []
  }
  use(middleware) {
    this.middlewares.push(middleware)
    return this
  }

  listen(...args) {
    console.log(args)
    const server = http.createServer(async (req, res) => {
      // 需要先创建上下文
      let ctx = this.createContext(req, res)
      // 组合函数
      let fn = this.compose(this.middlewares)
      await fn(ctx)
      let bodyType = typeof ctx.body
      let result = bodyType === 'object' ? JSON.stringify(ctx.body) : ctx.body
      // 解决中文乱码的问题
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end(result)
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

  compose(fns) {
    return function(ctx) {
      return dispatch(0)
      function dispatch(i) {
        let fn = fns[i]
        if (!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx, () => {
            // dispatch(i + 1)
            return dispatch(i + 1)
          })
        )
      }
    }
  }
}

module.exports = MyKoa
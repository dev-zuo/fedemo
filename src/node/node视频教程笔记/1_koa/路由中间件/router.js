
class Router {
  constructor() {
    this.stack = []
  }

  register(path, methods, middleware) {
    let route = { path, methods, middleware }
    this.stack.push(route)
  }

  get(path, middleware) {
    // 注册路由
    this.register(path, 'get', middleware)
  }

  post(path, middleware) {
    // 注册路由
    this.register(path, 'post', middleware)
  }

  routes() {
    // 返回一个中间件回调函数 (ctx, next) => { 进行路由处理 }
    let stock = this.stack
    return async (ctx, next) => {
      if (ctx.url === '/favicon.ico') {
        await next()
        return
      }
      const len = stock.length
      let route
      for(let i = 0; i < len; i++) {
        let item = stock[i]
        console.log(ctx.url, item, ctx.method)
        if (ctx.url === item.path && item.methods.includes(ctx.method.toLowerCase())) {
          route = item.middleware
          break
        }
      }
      console.log('route', route)
      if (typeof route === 'function') {
        // 如果匹配到了路由
        route(ctx, next)
      } else {
        await next()
      }
    }
  }
}

module.exports = Router
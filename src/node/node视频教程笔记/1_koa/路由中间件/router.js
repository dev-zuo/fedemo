
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

  routers() {
    // 返回一个中间件回调函数 (ctx, next) => { 进行路由处理 }
    let stock = this.stack
    return async (ctx, next) => {
      // 遍历路由进行匹配，如果匹配到了则执行，停止往下执行下一个中间件，否则向下执行
      stock.forEach((item) => {
        if (ctx.url === item.path && item.methods.includes(ctx.method)) {
          return
        }
        await next()
      })
    }
  }
}

module.exports = Router
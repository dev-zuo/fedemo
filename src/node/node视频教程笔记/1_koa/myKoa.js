

const http = require('http')

class MyKoa {

  // app.use 调用 app.use(callback)
  use(callback) {
    this.callback = callback
  }

  listen(...args) {
    console.log(args)
    const server = http.createServer(this.callback)
    server.listen(...args)
  }
}

module.exports = MyKoa

const http = require('http')
const fs =require('fs')
http.createServer((req, res) => {
  const { method, url } = req
  console.log(url)
  console.log(req.headers.cookie)
  if (method === 'GET' && url === '/') {
    fs.readFile('./index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } else if ((method === 'GET' || method === 'POST') && url === '/api/users') {
    // 如果是4000端口发过来的请求，允许跨域
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4000')
    res.setHeader('Set-Cookie', 'cookie1=test')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([{name: 'Tom', age: 20}]))
  } else if (method === 'OPTIONS' && url === '/api/users') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:4000',
      // 'ACCESS-Control-Allow-Headers': 'X-token',
      'ACCESS-Control-Allow-Headers': 'X-token,Content-Type',
      // 'Access-Control-Allow-Methods': 'PUT'
      'Access-Control-Allow-Credentials': 'true'
    })
    res.end()
  }
}).listen(3000, () => {
  console.log('服务已开启与3000端口')
})
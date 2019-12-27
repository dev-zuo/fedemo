
// // 1.基础应用
// const http = require('http')

// const server = http.createServer((req, res)=> {
//   res.end('hello....')
// })

// server.listen(3003)



// // 2.利用fs，渲染静态html
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {
  const { url, method, headers } = req
  console.log('url, method: ', url, method, headers)

  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) throw err
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
      name: 'guoqzuo'
    }))
  } else if (method === 'GET' && headers.accept.includes('image/*')) {
    // 使用流
    // 如果index.html有img，或是请求 /favicon.ico 时，可以正常加载图片
    console.log(headers.accept)
    fs.createReadStream('./' + url).pipe(res)
  }
})

server.listen(3003)

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req', req) // req IncomingMessage
  // console.log('res', res) // res ServerResponse 
  res.end('123'); // 接收到请求后，返回 "123"
});
// console.log(server)
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
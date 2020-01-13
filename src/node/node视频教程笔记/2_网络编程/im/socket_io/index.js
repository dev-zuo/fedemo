const Koa = require('koa')
const app = new Koa()
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);

app.use(require('koa-static')(__dirname + '/'))

let users = []

io.on('connection', (socket) => {
  console.log('a user connect')
  console.log(socket.id) // 每个链接都是一个新的连接
  users.push(socket.id)
  console.log('在线人数', users.length)

  // 接收到消息
  socket.on('chat message', (msg) => {
    console.log('chat msg', socket.id + ': ' + msg)
    // 广播给所有人
    io.emit('chat message', socket.id + ': ' + msg)
    // 广播给除了发送者的所有人
    // socket.broadcast.emit('chat message', socket.id + ': ' + msg)
  })
  // 如果有连接离线
  socket.on('disconnect', () => {
    console.log(socket.id + '已离线')
    users.splice(users.indexOf(socket.id), 1)
    console.log('在线人数', users.length)
  })
})

server.listen(3000, () => console.log('服务开启成功，3000端口'))
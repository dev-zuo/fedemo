const net = require('net')
const chatServer = net.createServer()
const clientList = []

chatServer.on('connection', client => {
  client.write('Hi\n')
  clientList.push(client)
  client.on('data', data => {
    console.log('recive:', data.toString())
    clientList.forEach(v => {
      v.write(data)
    })
  })
})

chatServer.listen(9000, () => {
  console.log('服务开启在9000端口')
})
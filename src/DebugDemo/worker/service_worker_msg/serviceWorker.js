// self.onmessage = (res) => {
//   // res - ExtendableMessageEvent {}
//   // res.source - WindowClient => 继承自 Client，所以有 postMessage()
//   console.log(res, res.data, res.source)
//   console.log('servcie 接收到消息：', res.data) 
//   // servcie 接收到消息： msg from client 
//   res.source.postMessage('msg from service')
// }


self.onmessage = (res) => {
  console.log('servcie 接收到消息：', res.data) 
}
self.onactivate = () => {
  self.clients.matchAll({ includeUncontrolled: true })
    .then((clientMatchs) => clientMatchs[0].postMessage('foo'))
}

let messagePort = null
self.onmessage = ({ ports }) => {
  // 第一次接收消息时，主线程把 MessageChannel 其中一个 port 传进来
  if (!messagePort) {
    messagePort = ports[0] // channel.port1
    // 重置监听器
    self.onmessage = null
    // 拿到 channel.port1 后使用它通信
    messagePort.onmessage = ({ data }) => {
      messagePort.postMessage(`you send data: ${data}`)
    }
  }
}
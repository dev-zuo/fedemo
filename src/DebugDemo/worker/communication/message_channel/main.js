const channel = new MessageChannel()
// channel: MessageChannel {port1: MessagePort, port2: MessagePort}

const worker = new Worker('./worker.js')
// 把 channel 实例两个通信端口中的一个传递给工作者线程
worker.postMessage(null, [channel.port1])
// 使用另一个端口与工作者线程通信
channel.port2.onmessage = ({ data }) => console.log(data)
channel.port2.postMessage(5)

// you send data: 5


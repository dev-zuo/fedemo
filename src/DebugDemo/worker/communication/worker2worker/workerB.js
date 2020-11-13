let messagePort = null
self.onmessage = ({ data, ports }) => {
  if (!messagePort) {
    messagePort = ports[0]
    messagePort.onmessage = ({ data }) => {
      console.log(`workerB receive data: ${data}`)
    }
  } else {
    messagePort.postMessage(data)
  }
}
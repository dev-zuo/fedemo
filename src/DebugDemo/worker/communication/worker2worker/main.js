const channel = new MessageChannel()
const workerA = new Worker('./workerA.js')
const workerB = new Worker('./workerB.js')

workerA.postMessage(null, [channel.port1])
workerB.postMessage(null, [channel.port2])

workerA.postMessage('a')
workerB.postMessage('b')
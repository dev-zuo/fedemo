const channel = new BroadcastChannel('worker_channel')
// BroadcastChannel {name: "worker_channel", onmessage: null }
const worker = new Worker('./worker.js')
channel.onmessage = ({ data }) => console.log(`heard ${data} on page`)
setTimeout(() => channel.postMessage('foo'), 1000)

// heard foo in worker
// heard bar on page
const channel = new BroadcastChannel('worker_channel')
channel.onmessage = ({ data }) => {
  console.log(`heard ${data} in worker`)
  channel.postMessage('bar')
}
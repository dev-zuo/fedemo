const worker = new Worker('./closeWorker.js')
worker.onmessage = ({ data }) => console.log(data)
// foo
// bar
let scriptStr = `self.onmessage = ({ data }) => console.log(data)`
const worker = new Worker(URL.createObjectURL(new Blob([scriptStr])))
worker.postMessage('blob worker script')

// blob worker script
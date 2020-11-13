function fibonacci(n) {
  return n < 1 ? 0 
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
}
let scriptStr = `self.postMessage((${fibonacci.toString()})(9))`
const worker = new Worker(URL.createObjectURL(new Blob([scriptStr])))
worker.onmessage = ({data}) => console.log(data) // 34
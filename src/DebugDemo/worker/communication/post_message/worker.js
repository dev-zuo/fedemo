function factorial(n) {
  let result = 1;
  while(n) {
    result *= n--
  }
  return result
}
self.onmessage = ({ data }) => {
  self.postMessage(`${data}! = ${factorial(data)}`)
}
// 当 worker 接收到 file 数据时
self.onmessage = ({data}) => {
  // 同步读 file
  const syncReader = new FileReaderSync()
  const result = syncReader.readAsDataURL(data)
  console.log(result)
  // 将数据发给主线程
  self.postMessage(result)
}
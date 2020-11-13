const worker = new Worker('./terminateWorker.js')

// 给 1000ms 时间，让工作者线程初始化
setTimeout(() => {
  worker.postMessage('foo')
  worker.terminate() // 立即终止，工作者线程消息队列会被清理锁住，
  worker.postMessage('bar')
  setTimeout(() => worker.postMessage('baz'), 0)
}, 1000)
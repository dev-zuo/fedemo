const worker = new Worker('./worker.js', {
  name: 'testOptionsWorker',
  type: "module",
  credentials: "omit"
})
console.log(worker)
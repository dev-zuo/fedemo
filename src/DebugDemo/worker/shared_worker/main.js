// const sharedWorker = new SharedWorker('./sharedWorker.js');
// console.log(sharedWorker);   // SharedWorker {port: MessagePort, onerror: null}

for (let i = 0; i < 5; ++i) {
  console.log('1212')
  new SharedWorker('./sharedWorker.js');
}
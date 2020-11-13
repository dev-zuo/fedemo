const worker = new Worker('./initWorker.js')
worker.postMessage('foo')
worker.postMessage('bar')
worker.postMessage('baz')
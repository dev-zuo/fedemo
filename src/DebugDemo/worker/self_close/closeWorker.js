self.postMessage('foo')
self.close()
self.postMessage('bar')
setTimeout(() => self.postMessage('baz'), 0)
const worker = new Worker('./worker.js')
worker.onerror = console.log

// ErrorEvent { isTrusted: true, message: "Uncaught Error: foo" }
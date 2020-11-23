console.log(navigator.serviceWorker)
// ServiceWorkerContainer {controller: null, ready: Promise, oncontrollerchange: null, onmessage: null, onmessageerror: null}

navigator.serviceWorker.register('./serviceWorker.js')
.then(console.log, console.error)

// ServiceWorkerRegistration { .. }

navigator.serviceWorker.register('./notExistWorker.js')
.then(console.log, console.error)
// A bad HTTP response code (404) was received when fetching the script.
// TypeError: Failed to register a ServiceWorker for scope ...
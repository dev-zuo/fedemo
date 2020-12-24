navigator.serviceWorker.onmessage = (res) => {
  // res - MessageEvent
  console.log(res, res.data)
  console.log('接收到来自 service worker 的消息:', res.data)
  // 接收到来自 service worker 的消息: foo
}

navigator.serviceWorker.register('./serviceWorker.js')
  .then((registration) => {
    // if (registration.active) {
    //   // registration.active - ServiceWorker {}
    //   registration.active.postMessage('msg from client')
    // }
    // if (navigator.serviceWorker.controller) {
    //   // ServiceWorker {}
    //   navigator.serviceWorker.controller.postMessage('msg from client')
    // }
  })
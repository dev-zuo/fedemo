console.log(navigator.serviceWorker)
// ServiceWorkerContainer {controller: null, ready: Promise, oncontrollerchange: null, onmessage: null, onmessageerror: null}

navigator.serviceWorker.oncontrollerchange = () => {
  // 未触发
  console.log('一个新的 service worker 控制了该客户端')
}
navigator.serviceWorker.ready.then(() => {
  console.log('ready:service worker 进入已激活状态')
})
  

navigator.serviceWorker.register('./serviceWorker.js')
  .then((registration) => {
    console.log(registration)
    console.log('registration.installing:', registration.installing)
    console.log('registration.waiting:', registration.waiting)
    console.log('registration.active:', registration.active)
    if (registration.installing) {
      console.log('service worker 处于 installing 状态')
      registration.installing.onstatechange = ({ target: { state }}) => {
        console.log('state changed to', state)
      }
    }
    if (registration.active) {
      console.log(navigator.serviceWorker.controller) // ServiceWorker
    }
    registration.onupdatefound = () => {
      console.log('有新版本，service worker 处于 installing 状态')
    }
    // state changed to installed
    // state changed to activating
    // state changed to activated
    // const request1 = 'https://www.foo.com'
    // const request2 = new Request('https://www.bar.com')
    // const response1 = new Response('fooResponse')
    // const response2 = new Response('barResponse')
    // caches.open('v1').then(cache => {
    //   cache.put(request1, response1)
    //     .then(() => cache.put(request2, response2))
    //     .then(() => cache.match(new Request('https://www.foo.com')))
    //     .then(res => res.text())
    //     .then(console.log) // 'fooResponse'
    //     .then(() => cache.match('https://www.bar.com'))
    //     .then(res => res.text())
    //     .then(console.log) // 'barResponse'
    // })
    // console.log(registration)
    // // console.log(self, self.clients, clients, registration.scope)
    // console.log(self.caches, caches)

    // caches.open('v1').then(cache => {
    //   caches.has('v1').then(console.log) // true
    //   console.log(cache) // Cache {}
    //   caches.has('v2').then(console.log) // false
    //   caches.delete('v1')
    //     .then(() => caches.has('v1'))
    //     .then(console.log) // false
    // }) 

    // caches.open('a1')
    //   .then(() => caches.open('a2'))
    //   .then(() => caches.open('a3'))
    //   .then(() => caches.keys())
    //   .then(console.log) // ["a1", "a2", "a3"]

    // const request = new Request('abc') // key
    // const response1 = new Response('s1')
    // const response2 = new Response('s2')
    // caches.open('s1')
    //   .then((s1cache) => s1cache.put(request, response1))
    //   .then(() => caches.open('s2'))
    //   .then((s2cache) => s2cache.put(request, response2))
    //   .then(() => caches.match(request))
    //   .then((res) => res.text())
    //   .then(console.log) // s1
  }, console.error)

// ServiceWorkerRegistration { .. }

// navigator.serviceWorker.register('./notExistWorker.js')
// .then(console.log, console.error)
// A bad HTTP response code (404) was received when fetching the script.
// TypeError: Failed to register a ServiceWorker for scope ...
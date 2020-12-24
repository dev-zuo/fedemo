console.log('start serviceWorker.js')
// console.log(self, self.clients, registration.scope)
// clients.claim()

const CACHE_KEY = 'v3'
self.onactivate = activateEvent => {
  console.log('Servcie worker 处于激活中状态')
  // 可以将老版本的缓存清除
  caches.keys()
    .then(keys => keys.filter(key => key != CACHE_KEY))
    .then(oldKeys => oldKeys.forEach(oldKey => caches.delete(oldKey)))
}

self.oninstall = installEvent => {
  console.log(installEvent, installEvent.waitUntil)
  // 状态停留在 安装中，5s 后状态变为 已安装 状态
  installEvent.waitUntil((async () => {
    // await new Promise(r => setTimeout(() => r(), 5000))
    await new Promise(r => setTimeout(r, 5000))
    // 5s 后执行，然后状态变为 
    console.log('5s 后')
  })())
}
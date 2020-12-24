// self.onactivate = () => self.registration.showNotification('bar')

self.onnotificationclick = (event) => {
  // NotificationEvent {}, Notification {}
  console.log('notification click', event, event.notification)
  // 点击通知后，在新的 tab 打开网页
  clients.openWindow('http://www.zuo11.com')
}
// self.onnotificationclose = (event) => {
//   console.log('notification close', event, event.notification)
// }


self.onpush = pushEvent => {
  console.log(pushEvent.data.text())
  pushEvent.waitUntil(
    self.registration.showNotification(pushEvent.data.text())
  )
}
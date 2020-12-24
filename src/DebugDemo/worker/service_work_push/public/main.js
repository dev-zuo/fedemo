// navigator.serviceWorker.register('./serviceWorker.js')
//   .then((registration) => {
//     Notification.requestPermission()
//       .then(status => {
//         if (status === 'granted') {
//           registration.showNotification('title')
//         }
//       })

//     registration.pushManager.subscribe({
//       applicationServerKey: 'BF9WWlvQiKSOwziO4gVeBdMeuhDW2HU2aCWAmaSLgXqGCGZK3ho15l30oQ6pdavh8acsc1kiXJNK-DtaqbHaZCQ', // 来自服务器的公钥
//       userVisibleOnly: true
//     })
//   })

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}



(async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "serviceWorker.js"
    );
    const status = await Notification.requestPermission()
    if (status === 'granted') {
      const vapidPublicKey = 'BF9WWlvQiKSOwziO4gVeBdMeuhDW2HU2aCWAmaSLgXqGCGZK3ho15l30oQ6pdavh8acsc1kiXJNK-DtaqbHaZCQ';
      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
      // 防止 DOMException: Failed to execute 'subscribe' on 'PushManager': Subscription failed - no active Service Worker
      if (!registration.active) {
        // 等待变为激活状态
        await new Promise(r => setTimeout(r, 500))
      }
      const pushSubscription = await registration.pushManager.subscribe({
        applicationServerKey: convertedVapidKey, // 来自服务器的公钥
        userVisibleOnly: true
      });
      console.log(pushSubscription) // PushSubscription
      console.log(JSON.stringify(pushSubscription))
      // { 
      //   "endpoint": "https://fcm.googleapis.com/fcm/send/ecbqKLEnhB8:APA91bGvTW0x3k57bT9gDMLPPVkwLotGJyqJ1kk8yvNHyNAJ8Z0F6O74BuA8QxVNPIsgf1gWlGrUe0bYSs4L6fo-Fl18WkwGyHc3FEo2YvSUXBr5AA7KenaZBkL1D87WuAE7ERl-JCM4",
      //   "expirationTime": null, 
      //   "keys": { 
      //     "p256dh": "BIpKDNOPNQcBnfJVmdtZM2eJ0qS-FjicsiZK8jyUU07lGREwM_VZe2ulIWdrdlNlg7RFnHge8vJSe5y6TagW3Oc",
      //     "auth": "IlAite8VLBLWV5ubUXg91w"
      //   }
      // }
    }
  } catch (err) {
    console.log(err);
  }
})()

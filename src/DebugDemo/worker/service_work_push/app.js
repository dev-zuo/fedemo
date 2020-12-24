const Koa = require('koa')
const app = new Koa()
const webpush = require('web-push');

app.use(require('koa-static')(__dirname + '/public'))

// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys)
const vapidKeys = {
  publicKey: 'BEkgw3ZBMpjDDHTo1SQrgX7SKCKvbE3J6GmJ-uPBsnKHX7-gtWI4lMo92Zj0qMKY3z5_q3PrqOja0tBGIIdHtwU',
  privateKey: 'bwCKCA3RsDgd_3I4VXWfXEfKc40kjmFekhYvb8cUqJw'
}

app.use((ctx, next) => {
  console.log(ctx)
})

app.listen(9000, () => {
  console.log('server start on 9000')
})

// const webpush = require('web-push');

// // VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey('<Your GCM API Key Here>');
// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
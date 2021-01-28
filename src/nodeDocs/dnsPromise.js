const dnsPromises = require('dns').promises

dnsPromises.lookup('fe.zuo11.com').then((result) => {
  console.log('address: %j family: IPv%s', result.address, result.family);
  // address: "120.77.166.5" family: IPv4
});

dnsPromises.resolveAny('fe.zuo11.com').then((ret) => {
  console.log(ret)
});
// [
//   { value: 'fe-zuo11-com.oss-cn-shenzhen.aliyuncs.com', type: 'CNAME' }
// ]

dnsPromises.reverse('120.77.166.5').then(console.log).catch(err => {
  console.log(err) // 错误
})
// Error: getHostByAddr ENOTFOUND 120.77.166.5
//     at QueryReqWrap.onresolve [as oncomplete] (internal/dns/promises.js:167:17) {
//   errno: 'ENOTFOUND',
//   code: 'ENOTFOUND',
//   syscall: 'getHostByAddr',
//   hostname: '120.77.166.5'
// }
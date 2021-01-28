const dns = require('dns');

console.log(`dns.getServers()`, dns.getServers())
// dns.getServers() [ '192.168.31.1' ] 本地路由地址

// dns.setServers([
//   '39.156.69.79',
// ]);
// console.log(`dns.getServers()`, dns.getServers())

// 注意不能使用 http 等协议
const arr = [
  'www.zuo11.com',
  'fe.zuo11.com'
]

arr.forEach(host => {
  // dns 查询，内部使用 getaddrinfo 系统调用，会读取 /etc/hosts 的配置
  dns.lookup(host, (err, address, family) => {
    console.log('host: %j \naddress: %j family: IPv%s', host, address, family);
  });
  // 查看 dns 解析，绕过 /etc/hosts 的配置，始终通过网络执行 DNS 查询
  // dns.resolve4() dns.resolve6() dns.resolveCname() dns.resolveNs()
  dns.resolveAny(host, (err, ret) => {
    console.log(err, ret)
  })
  // https://nodejs.org/dist/latest-v14.x/docs/api/dns.html#dns_dns_resolve_hostname_rrtype_callback
  // Uses the DNS protocol to resolve all records (also known as ANY or * query).
  // Uses the DNS protocol to resolve a IPv4 addresses (A records) for the hostname.
  // Uses the DNS protocol to resolve a IPv6 addresses (AAAA records) for the hostname.
  // Uses the DNS protocol to resolve CNAME records for the hostname. 
})

// guoqzuo@zuomac nodeDocs % node dns.js
// host: "fe.zuo11.com" 
// address: "120.77.166.5" family: IPv4
// host: "zuo11.com" 
// address: "47.107.190.93" family: IPv4

// null [
//   { value: 'fe-zuo11-com.oss-cn-shenzhen.aliyuncs.com', type: 'CNAME' }
// ]
// null [ { address: '47.107.190.93', ttl: 600, type: 'A' } ]

const ipArr = [
  '47.107.190.93',
]

ipArr.forEach(ip => {
  // 使用 getHostByAddr 系统调用
  // 执行一个反向 DNS 查询，将 IPv4 或 IPv6 地址解析为主机名数组。
  dns.reverse(ip, (err, hostnames) => {
    console.log('dns.reverse', err, hostnames)
  })
})

// dns.reverse Error: getHostByAddr ENOTFOUND 47.107.190.93
//     at QueryReqWrap.onresolve [as oncomplete] (dns.js:203:19) {
//   errno: 'ENOTFOUND',
//   code: 'ENOTFOUND',
//   syscall: 'getHostByAddr',
//   hostname: '47.107.190.93'
// } undefined

// 参考：https://stackoverflow.com/questions/48548085/firebase-reverse-dns-lookup-enotfound-error-node-js-dns
// Firebase reverse dns lookup ENOTFOUND error node.js dns
// don't allow reverse DNS lookups 一般服务商供应商不支持反向 dns 查询
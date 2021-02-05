const http = require('http')
const querystring = require('querystring')
const req = http.request('http://127.0.0.1', {
  path: '/user',
  port: 8000,
  method: 'POST',
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Length': Buffer.byteLength(postData)
    'Referer': 'www.zuo11.com'
  }
}, (res) => {
  console.log(res) // IncomingMessage
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  console.log(statusCode, contentType) // 200 application/json; charset=utf-8
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    // res 文本数据，如果是 JSON 字符串数据，需使用 JSON.parse(rawData);
    console.log(rawData) // {"code":200,"msg":"Success","data":{"b":1}}
  });
}).on('error', (e) => {
  // 请求返回的 http.ClientRequest 类，可以监听上面的一些方法
  console.error(`请求出现错误: ${e.message}`);
});
// req.write(JSON.stringify({ a: 1, b: 2 }))
req.write(querystring.stringify({ a: 1, b: 2 }))
req.end() // 必须
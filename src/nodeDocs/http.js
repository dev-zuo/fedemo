
const http = require('http')
// const https = require('https')

console.log(http)

http.get('http://fe.zuo11.com', {
  // hostname: 'localhost',
  // port: 80,
  path: '/',
  agent: false,  // Create a new agent just for this one request
  // method: 'POST',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Content-Length': Buffer.byteLength(postData)
  // }
  // 将数据写入请求主体。
  // req.write(postData);
  // req.end();
  // const postData = querystring.stringify({
  //   'msg': '你好世界'
  // });
}, (res) => {
  // Do stuff with response
  // console.log(res)
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  console.log(statusCode, contentType) // 200 text/html; charset=utf-8
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      // const parsedData = JSON.parse(rawData);
      // console.log(parsedData);
      console.log(rawData)
      let txt = '<title>左小白的技术日常</title>'
      txt = '<title>首页 | 左小白的前端笔记</title>'
      if (rawData.includes(txt)) {
        console.log('true')
      } else {
        console.log('error')
      }
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  // 请求返回的 http.ClientRequest 类，可以监听上面的一些方法
  console.error(`出现错误: ${e.message}`);
});

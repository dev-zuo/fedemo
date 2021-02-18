const ServiceMonitor = require('service-monitor')

const serviceMonitor = new ServiceMonitor({
  // 定时任务时间参数，与 node-monitor 时间参数一致
  scheduleStr: '1 * * * * *', // 测试用，每分钟第一秒执行任务
  // scheduleStr: '* * 7,14,21 * * *',

  // 邮件配置
  mailOption: {
    baseMail: '916707888@qq.com', // 发送邮件的基础邮箱
    baseAuthCode: 'xxxx', // qq POP3/SMTP授权码，如果是gmail，直接填密码
    from: 'guoqzuo <i@zuoguoqing.com>',
    to: 'i@zuoguoqing.com,guoqzuo@gmail.com',
    title: 'Sevice monitor 报告',
  },

  // 可视化入口、网页默认端口
  port: 8888,
  path: '/monitor',
})

// 如果 qq POP3/SMTP授权码错误，会出现如下错误
// sendMail fail Invalid login: 535 Login Fail. Please enter your authorization code to login. More information in http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256

// 测试接口, reqOptions，expectResOptions 返回的数据需要符合该条件
serviceMonitor.addApi(
  {
    url: 'https://api.zuo11.com/ibd/fooddaily/info',
    method: 'GET',
    payloadType: '', // 'serialize'、'json'
    // headers: {}
    // query: {}, // 未实现
    // payload: {},
  },
  { code: 200, msg: '成功', 'data.auditMark': 0 }
  // { code: 200, msg: '成功' }
  // { code: 200 }
)
serviceMonitor.addApi(
  { url: 'http://127.0.0.1:8000/user' },
  // { a: 12 }
  { a: 1 }
)
// serviceMonitor.addApi(
//   { url: 'http://127.0.0.1:8000/user', method: 'POST', payload: { user: 'xxx' } },
//   { code: 200, 'data.b': 1 }
// )

// 测试网站是否可访问 url, 正常页面打开后，正常返回的 html 文本应该包含的内容
// curl -v xx 中应该包含的内容
serviceMonitor.addPage('http://www.zuo11.com', '<title>左小白的技术日常</title>')
serviceMonitor.addPage('http://fe.zuo11.com', '<title>首页 | 左小白的前端笔记</title>')
serviceMonitor.addPage('https://fe.zuo11.com', '<title>首页 | 左小白的前端笔记</title>')
// serviceMonitor.addPage('https://kkk.zuo11.com', 'xxxx')

// 开始执行监听任务，开启 http 服务，可以通过 http://127.0.0.1:[port][path] 手动测试并查看结果
serviceMonitor.monitor()

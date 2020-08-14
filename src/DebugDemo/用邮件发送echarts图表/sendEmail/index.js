const nodemailer = require('nodemailer');

function sendEmail() {
  return new Promise((resolve, rejected) => {
    // create reusable transport method (opens pool of SMTP connections)
    let smtpTransport = nodemailer.createTransport({
      host: "smtp.qq.com", //qq smtp服务器地址, 如果是其他邮箱需要修改为对应的服务器
      secureConnection: false, //是否使用安全连接，对https协议的
      port: 465, //qq邮件服务所占用的端口
      auth: {
        user: "916707888@qq.com", //开启SMTP的邮箱，有用发送邮件
        pass: "rorvinuqemsybccc" // 如果是gmail，直接填密码
        // POP3/SMTP授權碼
      }
    });

    // setup e-mail data with unicode symbols
    let mailOptions = {
      from: "guoqzuo <i@zuoguoqing.com>", // sender address
      to: "i@zuoguoqing.com, zuoguoqing@aliyun.com", // list of receivers
      subject: "邮箱验证码", // Subject line
      text: `Hello，您的验证码是 1212323`, // plaintext body
      // html body
      html: `
            Hello，您的验证码是
            <img src="https://iknow-pic.cdn.bcebos.com/adaf2edda3cc7cd96b1584973701213fb80e9140?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1">
            <img src="http://www.zuo11.com/images/blog/web/qrcode.jpg">

            <div>
              <span style="color:red;">1243</span>
              <div style="margin:50px;border:1px solid #ccc;height: 100px;widht:100px;">1243</div>
            </div>
            <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
            <div id="main" style="width: 600px;height:400px;"></div>
            <script crossorigin="anonymous" integrity="sha384-i+fXrQ+G3+h2478EWpSpIXivtKbbze+0SNOXJGizkAp6DVG/m2fE6hiWeDwskVvp" src="https://lib.baomitu.com/echarts/4.7.0/echarts.js"></script>
            <script type="text/javascript">
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));
        
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };
        
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            </script>
          `
    }

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        rejected(error);
      } else {
        console.log("Message sent: " + response.message);
        // 发送成功
        console.log('邮件发送成功');
        resolve('发送成功');
      }
      // if you don't want to use this transport object anymore, uncomment following line
      smtpTransport.close(); // shut down the connection pool, no more messages
    });
  });
}

module.exports = sendEmail
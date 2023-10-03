/**
 * Captcha PNG img generator
 * @Author: George Chan
 * @Email: gchan@21cn.com
 * @Version: 1.0
 * @Date: 2013-08-18
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 */

var http = require('http');
var captchapng = require('./capcha.js');

http.createServer(function (request, response) {
    if(request.url == '/captcha.png') {
        let code = parseInt(Math.random()*9000+1000)
        console.log(code) // 1000 - 10000
        var p = new captchapng(80,30,code); // width,height,numeric captcha
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        response.writeHead(200, {
            'Content-Type': 'image/png'
        });
        response.end(imgbase64);
    } else response.end('');
}).listen(8181);

console.log('Web server started.\n http:\\\\127.0.0.1:8181\\captcha.png');
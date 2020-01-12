const originRequest = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

function request(url, callback) {
    const options = {
        url: url,
        encoding: null
    };
    originRequest(url, options, callback);
}

for (let i = 100553; i < 100563; i++) {
    const url = `https://www.dy2018.com/i/${i}.html`;
    request(url, function (err, res, body) {
        const html = iconv.decode(body, "gb2312");
        const $ = cheerio.load(html); // 解析html, 服务端jquery
        console.log($(".title_all h1").text(), i);
    });
}

// 2019年英国欧美剧《午夜狂飙/宵禁第一季》连载至5 100561
// 2019年美国欧美剧《叛徒/叛国者第一季》连载至6 100554
// 2018年奥地利6.6分剧情片《动物》BD中英双字 100558
// 2018年法国6.7分剧情片《高潮》BD中字 100559
// 2019年西班牙欧美剧《碰撞第一季》连载至10 100556
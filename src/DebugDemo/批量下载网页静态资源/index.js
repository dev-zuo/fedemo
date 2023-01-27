
// M2 pro 芯片切换动画 0000.jpg => 0052.png
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_pro/medium/medium_0051.jpg

// M2 max 芯片切换
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_max/medium/medium_0000.jpg


const axios = require('axios');
const fs = require('fs')
const path = require('path')

let BASE_URL = 'https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_pro/medium/medium_0051.jpg'

axios.get(BASE_URL, {
    responseType: 'arraybuffer'
})
  .then(function (response) {
    // handle success
    let fileNameArr = BASE_URL.split('/')
    let fileName = fileNameArr[fileNameArr.length - 1]
    fs.writeFileSync(path.resolve(__dirname, `./${fileName}`), response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
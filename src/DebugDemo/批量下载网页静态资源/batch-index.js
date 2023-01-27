
// M2 pro 芯片切换动画 0000.jpg => 0052.png
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_pro/medium/medium_0051.jpg

// M2 max 芯片切换
// https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/m2_max/medium/medium_0000.jpg


const axios = require('axios');
const fs = require('fs')
const path = require('path')

/**
 * 获取静态图片链接
 * @param {*} mode m2_pro 或 m2_max
 * @param {*} numStr '00' => '52'
 */
let getFileUrl = (mode, numStr) => `https://www.apple.com/105/media/us/macbook-pro-14-and-16/2022/1baf5961-c793-48e7-9efd-0d23cac1e101/anim/${mode}/medium/medium_00${numStr}.jpg`

const downloadImgFromUrl = (mode, fileUrl) => {
    axios.get(fileUrl, {
        responseType: 'arraybuffer'
    })
      .then(function (response) {
        // handle success
        let fileNameArr = fileUrl.split('/')
        let fileName = fileNameArr[fileNameArr.length - 1]
        fs.writeFileSync(path.resolve(__dirname, `./download/${mode}/${fileName}`), response.data)
        console.log('下载完成')
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}

for (let i = 0, len = 52; i <= len; i++) {
    let numStr = i + ''
    if (numStr.length < 2) {
        numStr = `0${numStr}` // 0 => '00', 9 => '09'
    }
    downloadImgFromUrl('m2_pro', getFileUrl('m2_pro', numStr))
    downloadImgFromUrl('m2_max', getFileUrl('m2_max', numStr))
}
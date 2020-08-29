
import logo from './logo.jpg'
import indexCss from './index.less'

let img = new Image()
img.src = logo
img.classList.add('logo')

// 将图片挂载到id为imgWrap的元素上
let imgWrap = document.querySelector('#imgWrap')
imgWrap.append(img)

document.write('hello webpack，结婚就是您')
console.log('test soruce mapaaa')

import axios from 'axios'
axios.get('/api/info').then(res => {
  console.log(res)
})

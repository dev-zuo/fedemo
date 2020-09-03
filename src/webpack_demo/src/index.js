
import logo from './logo.jpg'
import indexCss from './index.less'
import number from './number.js'

let img = new Image()
img.src = logo
img.classList.add('logo')

// 将图片挂载到id为imgWrap的元素上
let imgWrap = document.querySelector('#imgWrap')
imgWrap.append(img)

document.write('hello webpack，结婚就是您12123')
// console.log('test soruce mapaaa')

import axios from 'axios'
axios.get('/api/info').then(res => {
  console.log(res)
})

number()
if (module.hot) {
  module.hot.accept('./number.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(document.getElementById("number"))
    number()
  })
}
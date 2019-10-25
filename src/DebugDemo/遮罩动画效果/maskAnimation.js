
// 立即执行函数，防止污染全局作用域
(function() {
  console.log('>>> mask Animation load.')

  const MA_CONFIG = {
    count: 10, // 每个区块 count 张图片
    part: 8, // part 个区块
    imgSrc: './demo.png',
    imgWidth: "60vw", // 图片宽度
    partArr: [ // 区块定位
      ["top", "left"],
      ["top", "right"],
      ["bottom", "left"],
      ["bottom", "right"],
      ["top", "left"],
      ["top", "right"],
      ["bottom", "left"],
      ["bottom", "right"],
      ["top", "left"],
      ["bottom", "right"],
    ]
  }

  // 函数
  let _getCountGap = item => Math.round(Math.random() * 400 - 100)
  let _getRotate = item => Math.round(Math.random() * 360)
  let _getArr = count => new Array(count).fill('-')

  let tempFragment = document.createDocumentFragment()
  let tempArrCount = _getArr(MA_CONFIG.count)
  let tempArrPart = _getArr(MA_CONFIG.part)

  // 处理图片
  tempArrCount.forEach(() => {
    tempArrPart.forEach((item, index)=> {
      let img = new Image()
      img.src = MA_CONFIG.imgSrc
      img.setAttribute('class', "ma_" + MA_CONFIG.partArr[index].join('-'))

      Object.assign(img.style, {
        width: MA_CONFIG.imgWidth,
        position: "absolute",
        transform: `rotate(${_getRotate()}deg)`,
        [MA_CONFIG.partArr[index][0]]: `${_getCountGap()}px`,
        [MA_CONFIG.partArr[index][1]]: `${_getCountGap()}px`,
      })
  
      tempFragment.appendChild(img)
    })
  })

  window.onload = ()=> {
    // 将图片挂载到dom
    const div = document.createElement('div')
    div.appendChild(tempFragment)
    document.body.appendChild(div)

    // 准备挂载样式
    const styleElement = document.createElement('style')
    document.head.appendChild(styleElement)
    let sheet = document.styleSheets[0];

    // 暂时写死，其实可以用js处理下，更健壮，但可读性会降低
    const styleArr = [
      `.ma_top-left {
        animation: ma_moveTopLeft ease-in 2s; 
      }`,
      `.ma_top-right {
        animation: ma_moveTopRight ease-in 2s; 
      }`,
      `.ma_bottom-left{
        animation: ma_moveBottomLeft ease-in 2s; 
      }`,
      `.ma_bottom-right {
        animation: ma_moveBottomRight ease-in 2s; 
      }`,
      `@keyframes ma_moveTopLeft {
        from {}
        to {
          top: -1000px;
          left: -1000px;
        }    
      }`,
      `@keyframes ma_moveTopRight {
        from {}
        to {
          top: -1000px;
          right: -1000px;
        }    
      }`,
      `@keyframes ma_moveBottomLeft {
        from {}
        to {
          bottom: -1000px;
          left: -1000px;
        }    
      }`,
      `@keyframes ma_moveBottomRight {
        from {}
        to {
          bottom: -1000px;
          right: -1000px;
        }    
      }`
    ]

    // 挂载样式
    styleArr.forEach((item)=> {
      sheet.insertRule(item, 0)
    })

    // 2s 后卸载样式及dom
    setTimeout(()=> {
      document.body.removeChild(div)
      document.head.removeChild(styleElement)
    }, 2000)
  }
})()
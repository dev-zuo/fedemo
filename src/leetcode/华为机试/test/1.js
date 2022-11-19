
function a(str) {
  let startIndex = '' // 子串开始下标初始值
  let maxLength = 0 // 最大长度
  // i 为当前遍历下标
  for (let i = 0, len = str.length; i < len; i++) {
    // 如果不是数字
    let curNum = str[i] - 0 // 当前数字
    let preNum = str[i - 1] - 0 // 上一个数字
    console.log('xx', `'${startIndex}'`,i,curNum,preNum, maxLength,Number.isInteger(curNum))
    // 如果是数字
    if (Number.isInteger(curNum)) {
      // 第一次遇到数字，或者开始第一次匹配
      if (startIndex === '') {
        startIndex = i
      } else {
        // 之前已经开始了
        // 判断是否大于前一个数字，继续向下遍历
        if (curNum >= preNum) {
          // 不处理
        } else {
          console.log('=============')
          // 小于数字，结束
          let curMaxLen = i - startIndex
          console.log(`a-${curMaxLen}-`)
          curMaxLen > maxLength && (maxLength = curMaxLen)
          startIndex = '' // 重置
          // 倒退一步，下次一这个开始继续下一轮循环
          i--
        }
      }
    } else {
      if (startIndex === '') {
        // 没有开始匹配，则不处理
      } else {
        // 有开始匹配停止匹配
        let curMaxLen = i - startIndex
        console.log(`b-${curMaxLen}-`)
        curMaxLen > maxLength && (maxLength = curMaxLen)
        startIndex = '' // 重置
      }
    }
  }
  // 如果 startIndex 没有被重置，可能是走到最后一位了
  if (startIndex !== '') {
    let curMaxLen = str.length - startIndex
    console.log(`c-${curMaxLen}-`)
    curMaxLen > maxLength && (maxLength = curMaxLen)
  }
  return maxLength
}

console.log(a('abc2234019A334bc'))
console.log(a('A334bc2234599'))
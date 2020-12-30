const Deque = require('./8-deque-obj')
const Stack = require('../src/2-stack-obj')

// 字符串
function palindromeChecker(str) {
  let reverseStr = str.split('').reverse().join('')
  // return arr.join('') === str
  // 比较之前，消除空格、大小写影响
  function clear(src) {
    src = src.split(' ').join('').toLowerCase()
    return src
  }
  return clear(reverseStr) === clear(str)
}

// 栈
function palindromeChecker(str) {
  let stack = new Stack()
  let result = ''
  // 比较之前，消除空格、大小写影响
  function clear(src) {
    src = src.split(' ').join('').toLowerCase()
    return src
  }
  str = clear(str)
  for (let i = 0, len = str.length; i < len; i++) {
    stack.push(str[i])
  }
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return str === result
}

// 双端队列
function palindromeChecker(str) {
  let deque = new Deque()
  let result = ''
  // 比较之前，消除空格、大小写影响
  function clear(src) {
    src = src.split(' ').join('').toLowerCase()
    return src
  }
  str = clear(str)
  for (let i = 0, len = str.length; i < len; i++) {
    deque.addBack(str[i])
  }
  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) {
      return false
    }
  }
  return true
}

module.exports = palindromeChecker

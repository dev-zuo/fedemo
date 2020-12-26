const Stack = require('./2-stack-obj')
function decimalConverter(num, base) {
  let stack = new Stack()
  let result = ''
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (base < 2 || base > 36) {
    return ''
  }
  while (num) {
    stack.push(num % base)
    num = Math.floor(num / base)
  }
  while (!stack.isEmpty()) {
    result += digits[stack.pop()]
  }
  return result || '0'
}

module.exports = decimalConverter

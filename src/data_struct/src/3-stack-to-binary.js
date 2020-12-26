const Stack = require('./2-stack-obj')
function decimalToBinary(num) {
  let stack = new Stack()
  let result = ''
  while (num) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result || '0'
}

module.exports = decimalToBinary

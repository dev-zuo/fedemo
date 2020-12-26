const Stack = require('./2-stack-obj')
function isBalanceParentheses(str) {
  let stack = new Stack()
  if (typeof str !== 'string') {
    return false
  }
  const len = str.length
  let i = 0
  while (i < len) {
    if (str[i] === '(') {
      stack.push('(')
    }
    if (str[i] === ')') {
      if (stack.isEmpty()) {
        return false
      }
      stack.pop()
    }
    i++
  }
  return stack.isEmpty()
}

module.exports = isBalanceParentheses

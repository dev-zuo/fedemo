function factorialIterative(n) {
  if (n < 0) {
    return
  }
  let total = 1
  for (let i = 1; i <= n; i++) {
    total *= i
  }
  return total
}

function factorial(n) {
  // console.trace() // 调试 Call Stack
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}
factorial(5) // 120

module.exports = {
  factorialIterative,
  factorial,
}

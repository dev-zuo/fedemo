function fibonacciIterative(n) {
  if (n < 1) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  let numA = 1
  let numB = 1
  let result = 0
  // numA numbB x
  for (let i = 3; i <= n; i++) {
    result = numA + numB
    numA = numB
    numB = result
  }
  return result
}

function fibonacci(n) {
  if (n < 1) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacciMemorization(n) {
  const memory = [0, 1]
  const fobonacci = (n) => {
    if (memory[n] != null) {
      return memory[n]
    }
    return (memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory))
  }
  return fobonacci
}

module.exports = {
  fibonacciIterative,
  fibonacci,
  fibonacciMemorization,
}

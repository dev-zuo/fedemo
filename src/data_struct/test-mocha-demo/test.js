let assert = require('assert')

try {
  let result = assert.strictEqual([1, 2].indexOf(4), 2)
  console.log(result) // 不会执行
} catch(e) {
  console.log(e.message)
  // Expected values to be strictly equal:
  // -1 !== 2
}

try {
  let result = assert.ok([1, 2].indexOf(4) === 2, '值不相等')
  console.log(result) // 不会执行
} catch(e) {
  console.log(e.message)
  // Expected values to be strictly equal:
  // -1 !== 2
  // 值不相等
}

let assert = require('assert')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('当 value 不存在时，应该返回 -1', () => {
      assert.strictEqual([1, 2].indexOf(4), -1)
    })
  })
})


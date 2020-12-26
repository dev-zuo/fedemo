const expect = require('chai').expect
let { hanoiStack, hanoiRecursion } = require('../src/6-stack-hanoi')

describe('Hanoi Test', () => {
  it('递归实现测试', () => {
    for (let i = 1; i <= 10; i++) {
      expect(hanoiRecursion(i, 'a', 'b', 'c').length).to.equal(2 ** i - 1)
    }
  })
  it('栈+递归实现测试', () => {
    for (let i = 1; i <= 10; i++) {
      expect(hanoiStack(i).length).to.equal(2 ** i - 1)
    }
  })
})

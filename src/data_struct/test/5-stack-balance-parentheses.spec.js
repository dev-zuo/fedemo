const expect = require('chai').expect
const isBalanceParentheses = require('../src/5-stack-balance-parentheses')

describe('BalanceParentheses Test', () => {
  it('平衡括号测试', () => {
    expect(isBalanceParentheses(0)).to.be.false
    expect(isBalanceParentheses(')')).to.be.false
    expect(isBalanceParentheses('(')).to.be.false
    expect(isBalanceParentheses('()')).to.be.true
    expect(isBalanceParentheses('(()()()())')).to.be.true
    expect(isBalanceParentheses('(((())))')).to.be.true
    expect(isBalanceParentheses('(()((())()))')).to.be.true
    expect(isBalanceParentheses('((((((())')).to.be.false
    expect(isBalanceParentheses('()))')).to.be.false
    expect(isBalanceParentheses('(()()(()')).to.be.false
  })
})

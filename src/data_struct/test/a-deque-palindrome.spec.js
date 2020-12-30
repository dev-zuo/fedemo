const expect = require('chai').expect
const palindromeChecker = require('../src/a-deque-palindrome')

describe('palindrome Test', () => {
  it('回文测试', () => {
    expect(palindromeChecker('ak')).to.be.false
    expect(palindromeChecker('akkac')).to.be.false
    expect(palindromeChecker('a')).to.be.true
    expect(palindromeChecker('aa')).to.be.true
    expect(palindromeChecker('kayak')).to.be.true
    expect(palindromeChecker('level')).to.be.true
    expect(palindromeChecker('madam')).to.be.true
    expect(palindromeChecker('racecar')).to.be.true
    expect(palindromeChecker('Was it a Car or a cat I saw')).to.be.true
    expect(palindromeChecker('Step on no pets')).to.be.true
  })
})

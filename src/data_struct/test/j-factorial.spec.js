const { factorial, factorialIterative } = require('../src/j-factorial')
const expect = require('chai').expect

describe('Factorial Test', () => {
  it('factorialIterative(), factorial() test', () => {
    expect(factorialIterative(0)).to.equal(1)
    expect(factorialIterative(2)).to.equal(2)
    expect(factorialIterative(3)).to.equal(6)
    expect(factorialIterative(5)).to.equal(120)
    expect(factorialIterative(12)).to.equal(479001600)
    expect(factorialIterative(10)).to.equal(3628800)
    expect(factorial(0)).to.equal(1)
    expect(factorial(2)).to.equal(2)
    expect(factorial(3)).to.equal(6)
    expect(factorial(5)).to.equal(120)
    expect(factorial(12)).to.equal(479001600)
    expect(factorial(10)).to.equal(3628800)
  })
})

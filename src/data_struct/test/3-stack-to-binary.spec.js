const expect = require('chai').expect
const decimalToBinary = require('../src/3-stack-to-binary')

describe('DecimalToBinary Test', () => {
  it('10进制转2进制', () => {
    expect(decimalToBinary(0)).to.equal('0')
    expect(decimalToBinary(1)).to.equal('1')
    expect(decimalToBinary(2)).to.equal('10')
    expect(decimalToBinary(5)).to.equal('101')
    expect(decimalToBinary(10)).to.equal('1010')
    expect(decimalToBinary(15)).to.equal('1111')
    expect(decimalToBinary(233)).to.equal('11101001')
    expect(decimalToBinary(1000)).to.equal('1111101000')
  })
})

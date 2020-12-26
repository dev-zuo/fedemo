const expect = require('chai').expect
const decimalConverter = require('../src/4-stack-decimal-converter')

describe('decimalConverter Test', () => {
  it('10进制转其他进制', () => {
    expect(decimalConverter(0, 2)).to.equal('0')
    expect(decimalConverter(1, 2)).to.equal('1')
    expect(decimalConverter(1, 37)).to.equal('')
    expect(decimalConverter(100345, 2)).to.equal('11000011111111001')
    expect(decimalConverter(100345, 8)).to.equal('303771')
    expect(decimalConverter(100345, 16)).to.equal('187F9')
    expect(decimalConverter(100345, 35)).to.equal('2BW0')
  })
})

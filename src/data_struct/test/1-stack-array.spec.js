const StackArray = require('../src/1-stack-array')
const expect = require('chai').expect
let stack = null

describe('StackArray Test', () => {
  beforeEach(() => {
    stack = new StackArray()
  })

  it('empty test', () => {
    expect(stack.isEmpty()).to.equal(true)
    expect(stack.size()).to.equal(0)
  })

  it('push()/size()/toString() test', () => {
    stack.push('a')
    expect(stack.isEmpty()).to.equal(false)
    expect(stack.size()).to.equal(1)
    stack.push('b')
    expect(stack.size()).to.equal(2)
    stack.push('c')
    expect(stack.size()).to.equal(3)
    stack.push('d', 'e', 'f')
    expect(stack.length).to.equal(6)
    expect(stack.toString()).to.equal('a,b,c,d,e,f')
  })

  it('pop()/length test', () => {
    stack.push('a', 'b', 'c', 'd')
    expect(stack.pop()).to.equal('d')
    expect(stack.length).to.equal(3)
    expect(stack.pop()).to.equal('c')
    expect(stack.length).to.equal(2)
    expect(stack.pop()).to.equal('b')
    expect(stack.length).to.equal(1)
    expect(stack.pop()).to.equal('a')
    expect(stack.length).to.equal(0)
    expect(stack.pop()).to.equal(undefined)
    expect(stack.length).to.equal(0)
  })

  it('peek() test', () => {
    stack.push('a', 'b', 'c', 'd')
    expect(stack.peek()).to.equal('d')
    expect(stack.length).to.equal(4)
    stack.pop()
    stack.pop()
    expect(stack.peek()).to.equal('b')
  })

  it('clear()/isEmpty() test', () => {
    stack.push('a', 'b')
    expect(stack.length).to.equal(2)
    expect(stack.isEmpty()).to.equal(false)
    stack.clear()
    expect(stack.length).to.equal(0)
    expect(stack.isEmpty()).to.equal(true)
  })
})

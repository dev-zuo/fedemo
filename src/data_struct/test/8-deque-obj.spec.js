const expect = require('chai').expect
const Deque = require('../src/8-deque-obj')
let deque = ''

describe('Deque Test', () => {
  beforeEach(() => {
    deque = new Deque()
  })

  it('基础功能测试', () => {
    deque.addFront('a') // a
    deque.addBack('b') // a b
    deque.addFront('c') // c a b
    deque.addFront('d') // d c a b
    deque.addBack('e') // d c a b e
    expect(deque.toString()).to.equal('d,c,a,b,e')
    expect(deque.peekBack()).to.equal('e')
    expect(deque.peekFront()).to.equal('d')
    expect(deque.removeBack()).to.equal('e') // d c a b
    expect(deque.removeFront()).to.equal('d') // c a b
    deque.addFront('f') // f c a b
    expect(deque.peekBack()).to.equal('b')
    expect(deque.peekFront()).to.equal('f')
    expect(deque.toString()).to.equal('f,c,a,b')
  })

  it('clear()/size()/isEmpty()', () => {
    deque.addBack('a')
    deque.addBack('b')
    deque.addBack('c')
    expect(deque.size()).to.equal(3)
    expect(deque.isEmpty()).to.be.false
    deque.clear()
    expect(deque.size()).to.equal(0)
    expect(deque.isEmpty()).to.be.true
  })
})

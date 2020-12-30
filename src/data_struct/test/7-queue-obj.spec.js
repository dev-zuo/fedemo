const expect = require('chai').expect
const Queue = require('../src/7-queue-obj')
let queue = ''

describe('Queue Test', () => {
  beforeEach(() => {
    queue = new Queue()
  })

  it('enqueue()/size()/toString() test', () => {
    queue.enqueue('a')
    expect(queue.size()).to.equal(1)
    queue.enqueue('b')
    expect(queue.size()).to.equal(2)
    queue.enqueue('c')
    expect(queue.size()).to.equal(3)
    expect(queue.toString()).to.equal('a,b,c')
  })

  it('dequeue()/peek()', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.dequeue()).to.equal('a')
    expect(queue.peek()).to.equal('b')
    expect(queue.size()).to.equal(2)
    expect(queue.dequeue()).to.equal('b')
    expect(queue.peek()).to.equal('c')
    expect(queue.size()).to.equal(1)
    expect(queue.dequeue()).to.equal('c')
    expect(queue.size()).to.equal(0)
    expect(queue.dequeue()).to.equal(undefined)
  })

  it('clear()/isEmpty()', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.isEmpty()).to.be.false
    queue.clear()
    expect(queue.peek()).to.be.undefined
    expect(queue.isEmpty()).to.be.true
  })
})

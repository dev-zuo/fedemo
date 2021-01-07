const expect = require('chai').expect
const SortedLinkedList = require('../src/e-sorted-linked-list')
let list = null

describe('SortedLinkedList test', () => {
  beforeEach(() => {
    list = new SortedLinkedList()
  })

  it('push(),isEmpty(),size(),toStriing() test', () => {
    expect(list.isEmpty()).to.be.true
    list.push(1)
    list.push(3)
    list.push(2)
    expect(list.isEmpty()).to.be.false
    expect(list.size()).to.equal(3)
    expect(list.toString()).to.equal('1,2,3')
  })

  it('getElementAt(),removeAt() test', () => {
    expect(list.getElementAt(0)).to.be.undefined
    list.push(1)
    list.push(3)
    list.push(2)
    expect(list.getElementAt(3)).to.be.undefined
    expect(list.getElementAt(2).element).to.equal(3)
    expect(list.getElementAt(1).element).to.equal(2)
    expect(list.getElementAt(0).element).to.equal(1)
    expect(list.removeAt(0).element).to.equal(1)
    expect(list.size()).to.equal(2)
    expect(list.toString()).to.equal('2,3')
    expect(list.removeAt(2)).to.be.undefined
  })

  it('insert(),indexOf(),remove() test', () => {
    list.insert(1, 0)
    list.insert(2, 0) // 1 2
    list.insert(3, 1) // 1 2 3
    list.insert(4, 3) // 1 2 3 4
    expect(list.insert(5, 5)).to.be.true
    expect(list.toString()).to.equal('1,2,3,4,5')
    expect(list.indexOf(12)).to.equal(-1)
    expect(list.indexOf(4)).to.equal(3)
    expect(list.indexOf(2)).to.equal(1)
    expect(list.indexOf(3)).to.equal(2)
    expect(list.remove(4).element).to.equal(4)
    expect(list.size()).to.equal(4)
    expect(list.remove(2).element).to.equal(2)
    expect(list.size()).to.equal(3)
  })
})

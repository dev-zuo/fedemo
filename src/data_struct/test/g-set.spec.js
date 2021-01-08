const Set = require('../src/g-set')
const expect = require('chai').expect
let set = null

describe('Set Test', () => {
  beforeEach(() => {
    set = new Set()
  })

  it('has(),add(),size(),values(),delete(),clear() test', () => {
    set.add(1)
    expect(set.values()).to.deep.equal([1])
    expect(set.has(1)).to.be.true
    expect(set.size()).to.equal(1)
    set.add(2)
    expect(set.values()).to.deep.equal([1, 2])
    expect(set.has(2)).to.be.true
    expect(set.size()).to.equal(2)
    set.add(3)
    expect(set.has(9)).to.be.false
    expect(set.values()).to.deep.equal([1, 2, 3])
    set.delete(2)
    set.delete(4)
    set.delete(5)
    expect(set.size()).to.equal(2)
    set.clear()
    expect(set.size()).to.equal(0)
  })

  it('union(),intersection(),difference(),isSubsetOf() test', () => {
    let setArr = [1, 2, 3]
    let setBArr = [3, 4, 5, 6]
    let setCArr = [4, 5]
    let setB = new Set()
    let setC = new Set()
    setArr.forEach((value) => set.add(value))
    setBArr.forEach((value) => setB.add(value))
    setCArr.forEach((value) => setC.add(value))
    expect(set.union(setB).values()).to.deep.equal([1, 2, 3, 4, 5, 6])
    expect(set.union(setC).values()).to.deep.equal([1, 2, 3, 4, 5])
    expect(set.intersection(setB).values()).to.deep.equal([3])
    expect(setB.intersection(setC).values()).to.deep.equal([4, 5])
    expect(set.difference(setB).values()).to.deep.equal([1, 2])
    expect(setB.difference(setC).values()).to.deep.equal([3, 6])
    expect(set.isSubsetOf(setB)).to.be.false
    expect(setC.isSubsetOf(setB)).to.be.true
  })
})

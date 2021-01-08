const Dictionary = require('../src/h-dictionary')
const expect = require('chai').expect
let dictionary = null

describe('Dictionary Test', () => {
  beforeEach(() => {
    dictionary = new Dictionary()
  })

  it('set(),hasKey(),size(),keys(),values(),get(),keyValues() test', () => {
    dictionary.set('a', 'a@gmail.com')
    dictionary.set('b', 'b@gmail.com')
    dictionary.set('c', 'c@gmail.com')
    expect(dictionary.hasKey('a')).to.be.true
    expect(dictionary.hasKey('e')).to.be.false
    expect(dictionary.size()).to.equal(3)
    expect(dictionary.keys()).to.deep.equal(['a', 'b', 'c'])
    expect(dictionary.values()).to.deep.equal(['a@gmail.com', 'b@gmail.com', 'c@gmail.com'])
    expect(dictionary.get('a')).to.equal('a@gmail.com')
    dictionary.remove('b')
    expect(dictionary.keys()).to.deep.equal(['a', 'c'])
    expect(dictionary.keyValues()).to.deep.equal([
      { key: 'a', value: 'a@gmail.com' },
      { key: 'c', value: 'c@gmail.com' },
    ])
  })

  it('forEach(),isEmpty(),clear(),toString test', () => {
    dictionary.set('a', '1')
    dictionary.set('b', '2')
    expect(dictionary.isEmpty()).to.be.false
    expect(dictionary.toString()).to.equal('[#a: 1],[#b: 2]')
    let arr = []
    dictionary.set('c', '3')
    dictionary.forEach((key, value) => {
      arr.push([key, value])
      if (key === 'b') {
        return false
      }
    })
    expect(arr).to.deep.equal([
      ['a', '1'],
      ['b', '2'],
    ])
    expect(dictionary.size()).to.equal(3)
    dictionary.clear()
    expect(dictionary.isEmpty()).to.be.true
  })
})

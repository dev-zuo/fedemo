const HashTable = require('../src/i-hash-table')
const expect = require('chai').expect
let hashTable = null

describe('HashTable Test', () => {
  beforeEach(() => {
    hashTable = new HashTable()
  })

  it('put(),remove(),get() test', () => {
    hashTable.put('zhangsan', '1')
    hashTable.put('lisi', '2')
    // console.log(hashTable)
    // table: {
    //   '7': ValuePair { key: 'zhangsan', value: '1' },
    //   '26': ValuePair { key: 'lisi', value: '2' }
    // }
    expect(hashTable.get('lisi')).to.equal('2')
    expect(hashTable.get('zhangsan')).to.equal('1')
    expect(hashTable.toString()).to.equal('[#zhangsan: 1],[#lisi: 2]')
    hashTable.remove('lisi')
    expect(hashTable.toString()).to.equal('[#zhangsan: 1]')
  })
})

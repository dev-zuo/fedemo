class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  // 更高级的散列函数
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }

  // 简单的散列函数
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    let tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0, len = tableKey.length; i < len; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode(key) {
    // return this.loseloseHashCode(key)
    return this.djb2HashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      let position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  get(key) {
    let valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove(key) {
    let hash = this.hashCode(key)
    let valuePair = this.table[hash]
    if (valuePair !== null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  keyValues() {
    return Object.values(this.table) // 键值对数组
  }

  keys() {
    return Object.values(this.table).map((item) => item.key)
  }

  values() {
    return Object.values(this.table).map((item) => item.value)
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let valuePairs = this.keyValues()
    let str = ''
    for (let i = 0, len = valuePairs.length; i < len; i++) {
      str += valuePairs[i].toString()
      if (i !== len - 1) {
        str += ','
      }
    }
    return str
  }
}

function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

module.exports = HashTable

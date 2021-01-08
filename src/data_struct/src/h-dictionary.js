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

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  set(key, value) {
    if (key != null && value != null) {
      this.table[this.toStrFn(key)] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  get(key) {
    let valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
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

  forEach(callbackFn) {
    let valuePairs = this.keyValues()
    for (let i = 0, len = valuePairs.length; i < len; i++) {
      let result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  clear() {
    this.table = {}
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

module.exports = Dictionary

class StackArray {
  constructor() {
    this.items = []
  }
  push(...args) {
    this.items.push(...args)
    return this.items.length
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
  get length() {
    return this.items.length
  }
  toString() {
    return this.items.join(',')
  }
}

module.exports = StackArray

class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  // 向栈中插入元素
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  get length() {
    return this.count
  }
  // 从栈中弹出元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  clear() {
    this.items = {}
    this.count = 0
    // 或者
    // while(!this.isEmpty()) {
    //   this.pop()
    // }
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    } else {
      let i = 0,
        len = this.count,
        result = ''
      while (i < len) {
        result += this.items[i]
        if (i !== len - 1) {
          result += ','
        }
        i++
      }
      return result
    }
  }
}

module.exports = Stack

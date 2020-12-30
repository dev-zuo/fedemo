class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      // 如果之前队列从前端移出过元素
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      // 如果队列没有从前端移出过元素  this.lowestCount = 0
      // 新进来的需要替换原来的 lowestCount = 0 的元素
      // 新增 this.items[this.count] 且把每个值向后移动一位
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[this.lowestCount] = element
    }
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }
  peekFront() {
    return this.isEmpty() ? undefined : this.items[this.lowestCount]
  }
  peekBack() {
    return this.isEmpty() ? undefined : this.items[this.count - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  size() {
    return this.count - this.lowestCount
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let result = ''
    for (let i = this.lowestCount; i < this.count; i++) {
      result += this.items[i]
      if (i !== this.count - 1) {
        result += ','
      }
    }
    return result
  }
}

module.exports = Deque

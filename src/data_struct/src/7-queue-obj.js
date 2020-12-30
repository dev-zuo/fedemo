class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 入队
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 出列
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    let result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++ // 标记队列的最开始的一位
    return result
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
    // return this.size() === 0
  }
  peek() {
    return this.isEmpty() ? undefined : this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
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

module.exports = Queue

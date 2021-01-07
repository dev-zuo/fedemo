const LinkedList = require('./b-linked-list')

class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = undefined
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = undefined // 尾部节点
  }

  // 向尾部添加元素（重写）
  push(element) {
    const node = new DoublyNode(element)
    // 如果链表为空
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      // 首尾相连
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }

  // 从指定位置移除元素
  removeAt(index) {
    // 越界检查
    if (index < 0 || index >= this.count) {
      return undefined
    }
    let current = this.head
    // 如果是移除 head 节点
    if (index === 0) {
      this.head = current.next
      this.head && (this.head.prev = undefined)
      // this.tail 可能会发生变更
      if (this.size() === 1) {
        this.tail = undefined
      }
    } else if (index === this.count - 1) {
      // 如果是末尾，可以不用遍历，直接使用 tail 指针
      // index >= 1, count >= 2
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = undefined
    } else {
      // index >= 1, count >= 2，不是末尾
      while (index--) {
        current = current.next
      }
      let prevNode = current.prev
      let nextNode = current.next
      prevNode.next = nextNode
      nextNode.prev = prevNode
    }
    this.count--
    return current
  }

  // 获取指定位置的元素
  getElementAt(index) {
    // 越界检查
    if (index < 0 || index >= this.count) {
      return undefined
    }
    if (index === this.count - 1) {
      return this.tail
    }
    let current = this.head
    while (index--) {
      current = current.next
    }
    return current
  }

  // 指定位置插入元素
  insert(element, index) {
    // 越界检查
    if (index < 0 || index > this.count) {
      return false
    }
    let node = new DoublyNode(element)
    if (index === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
    } else if (index === this.count) {
      // 尾部插入
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      // index >= 1，非尾部
      let prevNode = this.getElementAt(index - 1)
      node.next = prevNode.next
      prevNode.next.prev = node
      prevNode.next = node
      node.prev = prevNode
    }
    this.count++
    return true
  }

  // indexOf(element) {
  //   let current = this.head
  //   for (let i = 0; i < this.count; i++) {
  //     // 可以在构造函数中传入 equalsFn，判定节点相等的函数
  //     if (current.element === element) {
  //       return i
  //     }
  //     current = current.next
  //   }
  //   return -1
  // }

  // remove(element) {
  //   let index = this.indexOf(element)
  //   return this.removeAt(index)
  // }

  // isEmpty() {
  //   return this.size() === 0
  // }
  // size() {
  //   return this.count
  // }
  // getHead() {
  //   return this.head
  // }
  // toString() {
  //   if (!this.head) {
  //     return ''
  //   }
  //   // 链表不为空
  //   let current = this.head
  //   let str = ''
  //   for (let i = 0; i < this.count; i++) {
  //     str += current.element
  //     if (i !== this.count - 1) {
  //       str += ','
  //     }
  //     current = current.next
  //   }
  //   return str
  // }
}

module.exports = DoublyLinkedList

const LinkedList = require('./b-linked-list')
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class CircularLinkedList extends LinkedList {
  // 向尾部添加元素
  push(element) {
    const node = new Node(element)
    node.next = this.head
    // 如果链表为空
    if (!this.head) {
      this.head = node
      this.head.next = this.head
    } else {
      // 找到尾部节点
      let lastNode = this.head
      while (lastNode.next !== this.head) {
        lastNode = lastNode.next
      }
      lastNode.next = node
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
    // 获取尾部节点
    let tail = this.getElementAt(this.count - 1)
    // 如果是移除 head 节点
    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined
      } else {
        this.head = current.next
        tail.next = this.head
      }
    } else {
      // index >= 1 找到前一个元素，找到后一个元素(current.next)
      let prevNode = undefined
      while (index--) {
        prevNode = current
        current = current.next
      }
      prevNode.next = current.next
      // let prevNode = this.getElementAt(index - 1)
      // current = prevNode.next
      // prevNode.next = current.next
    }
    this.count--
    return current
  }

  // // 获取指定位置的元素
  // getElementAt(index) {
  //   // 越界检查
  //   if (index < 0 || index >= this.count) {
  //     return undefined
  //   }
  //   let current = this.head
  //   while (index--) {
  //     current = current.next
  //   }
  //   return current
  // }

  // 指定位置插入元素
  insert(element, index) {
    // 越界检查
    if (index < 0 || index > this.count) {
      return false
    }
    let node = new Node(element)
    if (index === 0) {
      if (!this.head) {
        this.head = node
        this.head.next = this.head
      } else {
        let tail = this.getElementAt(this.count - 1)
        node.next = this.head
        this.head = node
        tail.next = this.head
      }
    } else {
      // index >= 1
      let prevNode = this.getElementAt(index - 1)
      // prevNode xxx xxx
      node.next = prevNode.next
      prevNode.next = node
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

module.exports = CircularLinkedList

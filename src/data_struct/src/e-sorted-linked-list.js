const LinkedList = require('./b-linked-list')
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a > b ? 1 : -1
}

class SortedLinkedList extends LinkedList {
  constructor(compareFn = defaultCompare) {
    super()
    this.compareFn = compareFn
  }

  getInsertIndex(element) {
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (this.compareFn(element, current.element) < 0) {
        return i
      }
      current = current.next
    }
    return this.count
  }

  // 向尾部添加元素
  push(element) {
    const pos = this.getInsertIndex(element)
    return super.insert(element, pos)
  }

  // // 从指定位置移除元素
  // removeAt(index) {
  //   // 越界检查
  //   if (index < 0 || index >= this.count) {
  //     return undefined
  //   }
  //   let current = this.head
  //   // 如果是移除 head 节点
  //   if (index === 0) {
  //     this.head = current.next
  //   } else {
  //     // index >= 1 找到前一个元素，找到后一个元素(current.next)
  //     let prevNode = undefined
  //     while (index--) {
  //       prevNode = current
  //       current = current.next
  //     }
  //     prevNode.next = current.next
  //     // let prevNode = this.getElementAt(index - 1)
  //     // current = prevNode.next
  //     // prevNode.next = current.next
  //   }
  //   this.count--
  //   return current
  // }

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
  insert(element) {
    const pos = this.getInsertIndex(element)
    // console.log(pos)
    return super.insert(element, pos)
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

module.exports = SortedLinkedList

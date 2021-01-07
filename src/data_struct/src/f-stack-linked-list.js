const DoublyLinkedList = require('./c-doubly-linked-list')

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1).element
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.size() - 1).element
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  get length() {
    return this.size()
  }

  size() {
    return this.items.size()
  }

  clear() {
    this.items = new DoublyLinkedList()
  }

  toString() {
    return this.items.toString()
  }
}

module.exports = StackLinkedList

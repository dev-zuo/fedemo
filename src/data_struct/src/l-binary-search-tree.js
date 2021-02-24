class Node {
  constructor(key) {
    this.key = key // 节点值
    this.left = null // 左侧子节点
    this.right = null // 右侧子节点
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 递归：将 key 插入对应的位置
  insertNode(node, key) {
    // 比较 node 的键 和 key 的值谁大，大的放右边，小的放左边
    if (node.key > key) {
      // 放左边
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      // 放右边
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 向树中插入新的键
  insert(key) {
    if (this.root) {
      this.insertNode(this.root, key)
    } else {
      this.root = new Node(key)
    }
  }

  // 中序遍历
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  inOrderTraverseNode(node, cb) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }

  // 先序遍历
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if (node != null) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb)
      this.preOrderTraverseNode(node.right, cb)
    }
  }

  // 后序遍历
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }
  postOrderTraverseNode(node, cb) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  //返回树中最小的键/值
  min() {
    return this.minNode(this.root)
  }
  // 最左侧是最小值
  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  //返回树中最大的键/值
  max() {
    return this.maxNode(this.root)
  }
  // 最右侧是最大值
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  // 在树中查找一个键，节点存在返回 true，不存在返回 false
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      // 等于
      return true
    }
  }

  //从树中移除某个键
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (node == null) {
      return null
    }
    if (node.key > key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (node.key < key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 相等
      // 1. 如果是叶子节点
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // node.left node.right 不都为空

      // 2. 左侧为空，右侧有值。或者左侧有值，右侧为空
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }

      // 3.两侧都有节点，寻找右侧最小的替代自己，然后从右侧子树移除替代的最小的节点
      let minNode = this.minNode(node.right)
      node.key = minNode.key
      node.right = this.removeNode(node.right, minNode.key)
      return node
    }
  }
}

// // 示例
// const tree = new BinarySearchTree()
// let arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]
// arr.forEach((item) => tree.insert(item))

// function getArr(tree, type) {
//   const typeMap = {
//     inOrder: 'inOrderTraverse',
//     preOrder: 'preOrderTraverse',
//     postOrder: 'postOrderTraverse',
//   }
//   let arr = []
//   tree[typeMap[type]]((item) => arr.push(item))
//   return arr
// }

// console.log(getArr(tree, 'inOrder'))
// // [ 3,  5,  7,  8,  9, 10, 11, 12, 13, 14, 15, 18, 20, 25 ]
// console.log(getArr(tree, 'preOrder'))
// // [ 11,  7,  5,  3,  9,  8, 10, 15, 13, 12, 14, 20, 18, 25 ]
// console.log(getArr(tree, 'postOrder'))
// // [ 3,  5,  8, 10,  9,  7, 12, 14, 13, 18, 25, 20, 15, 11 ]

// console.log(tree.min()) // Node { key: 3, left: null, right: null }
// console.log(tree.max()) // Node { key: 25, left: null, right: null }

// console.log(tree.search(1)) // false
// console.log(tree.search(8)) // true

// tree.remove(6)
// console.log(getArr(tree, 'inOrder'))
// // [ 3,  5,  7,  8,  9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
// tree.remove(5)
// console.log(getArr(tree, 'inOrder'))
// // [ 3, 7,  8,  9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
// tree.remove(15)
// console.log(getArr(tree, 'inOrder'))
// // [ 3, 7,  8,  9, 10, 11, 12, 13, 14, 18, 20, 25]

module.exports = BinarySearchTree

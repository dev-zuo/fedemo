const BinarySearchTree = require('./l-binary-search-tree')
const Colors = {
  BLACK: 'black',
  RED: 'red',
}
class RedBlackNode {
  constructor(key) {
    this.key = key // 节点值
    this.left = null // 左侧子节点
    this.right = null // 右侧子节点
    this.color = Colors.RED
    this.parent = null
  }
  isRed() {
    return this.color === Colors.RED
  }
}

class RedBlackTree extends BinarySearchTree {
  insert(key) {
    // special case: first key
    if (this.root == null) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      // 验证红黑树是否还是平衡的，是否满足所有要求：重新填色/旋转
      this.fixTreeProperties(newNode)
    }
  }

  insertNode(node, key) {
    if (key < node.key) {
      if (node.left == null) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right
    } else {
      return this.insertNode(node.right, key)
    }
  }

  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
      let parent = node.parent
      const grandParent = parent.parent

      // case A 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right

        // case 1: uncle of node is also red - only recoloring
        // 叔节点也是红色重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // case 2: node is right child - left rotate
          // 节点是右侧子节点 - RR
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          }

          // case 3: node is left child - right rotate
          // 节点是左侧子节点 - LL
          this.rotationLL(grandParent)
          // swap color
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      } else {
        // case B: parent is right child of grand parent
        // 父节点是右侧子节点

        const uncle = grandParent.left

        // case 1: uncle is read - only recoloring
        // 叔节点是红色节点 - 只需重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // case 2: node is left child - left rotate
          // 节点是左侧子节点 LL
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }

          // case 3: node is right child - left rotate
          // 节点是右侧子节点 RR
          this.rotationRR(grandParent)
          // swap color
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      }
    }
    this.root.color = Colors.BLACK
  }

  /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node<T>
   */
  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.right = node
    node.parent = tmp
  }

  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.left = node
    node.parent = tmp
  }
}

const BinarySearchTree = require('./l-binary-search-tree')
class Node {
  constructor(key) {
    this.key = key // 节点值
    this.left = null // 左侧子节点
    this.right = null // 右侧子节点
  }
}
class AVLTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
  }

  rotationLL(node) {
    let temp = node.left // node 的左侧子节点作为新的根节点，先保存
    node.left = temp.right // 将新根节点的右侧子节点移动到原根节点左侧
    temp.right = node // 将原根节点移动到新根节点的右侧
    return temp // 返回新的根节点
  }

  rotationRR(node) {
    let temp = node.right // node 的右侧子节点作为新的根节点，先保存
    node.right = temp.left // 将新根节点的左侧子节点移动到原根节点右侧
    temp.left = node // 将原根节点移动到新根节点的左侧
    return temp // 返回新的根节点
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  insert(key) {
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key) {
    if (node == null) {
      return new Node(key)
    }
    if (node.key > key) {
      node.left = this.insertNode(node.left, key)
    } else if (node.key < key) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node // 已经有值相同的节点
    }
    // 验证树是否平衡
    // node.left 高度 - node.right 高度，其高度差也叫平衡因子 相差大于2 ，即不平衡
    // 由于树本来就是平衡的，且每次都有做做平衡处理，因此插入新值后，最多高度相差 2
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === 2) {
      // 左侧不平衡
      return node.left.key > key ? this.rotationLL(node) : this.rotationLR(node)
    }
    if (balanceFactor === -2) {
      // 右侧不平衡，比较 node.right 的 key 与当前 key 大小
      // 如果大于，插入左侧，左侧不平衡 RL，否则插入右侧 RR
      return node.right.key > key ? this.rotationRL(node) : this.rotationRR(node)
    }
    return node
  }
  // 获取平衡因子
  getBalanceFactor(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    // -2 右不平衡
    // 2 左不平衡
  }
  // 获取节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
  }

  remove(key) {
    this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    node = super.removeNode(node, key) // 调用 BST 的移除节点方法
    if (node == null) {
      return node // 不需要平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === 2) {
      // 左侧不平衡，说明右侧删了节点，需要再判断左侧是 LL 还是 LR
      let balanceFactorLeft = this.getBalanceFactor(node.left)
      // 左侧子节点平衡(0)或者左右相差(1) 则为 LL 否则为 LR
      return [0, 1].includes(balanceFactorLeft) ? this.rotationLL(node) : this.rotationLR(node)
    }
    if (balanceFactor === -2) {
      // 右侧不平衡
      let balanceFactorRight = this.getBalanceFactor(node.left)
      // 右侧子节点平衡(0)或者左右相差(-1) 则为 RR 否则为 RL
      return [0, -1].includes(balanceFactorRight) ? this.rotationRR(node) : this.rotationRL(node)
    }
    return node
  }
}

// 示例
const tree = new AVLTree()
// let arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25] // 标准树
let arr = [11, 3, 8, 9, 10, 13, 12, 14, 20, 18, 25, 7, 15, 5] // 标准树
// let arr = [11, 7]
arr.forEach((item) => tree.insert(item))

function getArr(tree, type) {
  const typeMap = {
    inOrder: 'inOrderTraverse',
    preOrder: 'preOrderTraverse',
    postOrder: 'postOrderTraverse',
  }
  let arr = []
  tree[typeMap[type]]((item) => arr.push(item))
  return arr
}

console.log(getArr(tree, 'inOrder'))
// [ 3,  5,  7,  8,  9, 10, 11, 12, 13, 14, 15, 18, 20, 25]
console.log(getArr(tree, 'preOrder'))
// [(10, 8, 5, 3, 7, 9, 14, 12, 11, 13, 20, 18, 15, 25)]
console.log(getArr(tree, 'postOrder'))
// [ 3,  7,  5,  9,  8, 11, 13, 12, 15, 18, 25, 20, 14, 10 ]

tree.remove(9)
console.log(getArr(tree, 'inOrder'))
console.log(getArr(tree, 'preOrder'))
console.log(getArr(tree, 'postOrder'))

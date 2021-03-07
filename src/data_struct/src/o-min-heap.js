class MinHeap {
  constructor() {
    this.heap = []
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value != null) {
      // 添加到末尾
      this.heap.push(value)
      // 将最后一个节点和其父节点比较，如果 > 就和父节点交换 sift [sɪft] 筛选
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  // 上移操作
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  // 交换数组中 a 和 b 的值
  swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  // 最小值或最大值
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    // 返回最小值/最大值，末尾元素替代 root 元素，再下移操作
    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removedValue
  }

  // 下移操作，堆化
  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    // 左侧子节点比父节点小，不是最小堆，需要处理
    if (left < size && this.heap[element] > this.heap[left]) {
      element = left
    }
    // 右侧子节点比原 index 或左侧子节点大，将 element 设置为 右侧子节点位置
    if (right < size && this.heap[element] > this.heap[right]) {
      element = right
    }
    if (index !== element) {
      this.swap(this.heap, index, element)
      this.siftDown(element)
    }
  }

  getAsArray() {
    return this.heap
  }

  clear() {
    this.heap = []
  }

  heapify(array) {
    if (array) {
      this.heap = array
    }
    const maxIndex = Math.floor(this.size() / 2) - 1
    // official demo error
    // for (let i = 0; i <= maxIndex; i++) {
    for (let i = maxIndex; i >= 0; i--) {
      this.siftDown(i)
    }
    return this.heap
  }

  heapSort(array, compareFn) {
    if (array.length <= 1) {
      return array
    }

    let result = []
    this.heapify(array) // 堆化
    // 每次取堆顶部即可
    while (this.size() >= 1) {
      result.push(this.extract())
    }
    this.heap = result
    return result
  }
}

module.exports = {
  MinHeap,
}

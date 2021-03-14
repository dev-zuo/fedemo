const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
}

// 初始化每个顶点颜色
const initializeColor = (vertices) => {
  const color = {}
  vertices.forEach((item) => {
    color[item] = Colors.WHITE
  })
  return color
}

const Queue = require('./7-queue-obj')
const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices() // 顶点数组
  const adjList = graph.getAdjList() // 图，字典
  const color = initializeColor(vertices) // 初始化每个顶点颜色
  const queue = new Queue()
  const distances = {} // 每个顶点到 startVertex 的距离
  const predecessors = {} // 每个顶点的上一个顶点
  queue.enqueue(startVertex) // 入队列

  // 初始化
  vertices.forEach((item) => {
    distances[item] = 0
    predecessors[item] = null
  })

  // 队列不为空
  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u) // 获取相邻的顶点列表
    color[u] = Colors.GREY
    neighbors.forEach((item) => {
      if (color[item] === Colors.WHITE) {
        color[item] = Colors.GREY
        // 与顶点的距离 = 上个节点距顶点的距离 + 1
        distances[item] = distances[u] + 1
        // 存储上一个顶点
        predecessors[item] = u
        queue.enqueue(item)
      }
    })
    color[u] = Colors.BLACK
  }
  return { distances, predecessors }
}

const Graph = require('./p-graph')
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
let graph = new Graph()
myVertices.forEach((item) => graph.addVertex(item))
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
// breadthFirstSearch(graph, myVertices[0], console.log)
// A B C D E F G H I

console.log(BFS(graph, myVertices[0]))
// {
//   distances: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
//   predecessors: {
//     A: null,
//     B: 'A',
//     C: 'A',
//     D: 'A',
//     E: 'B',
//     F: 'B',
//     G: 'C',
//     H: 'D',
//     I: 'E'
//   }
// }

let { distances, predecessors } = BFS(graph, myVertices[0])
let topVetex = myVertices[0]
const Stack = require('./2-stack-obj')
myVertices.forEach((item, index) => {
  if (index === 0) {
    return
  }
  let stack = new Stack()
  stack.push(item)
  let temp = item
  while (predecessors[temp] !== topVetex) {
    temp = predecessors[temp]
    stack.push(temp) // 插入首部
  }
  stack.push(topVetex)
  let str = ''
  while (!stack.isEmpty()) {
    str += stack.pop() + (stack.isEmpty() ? '' : ' - ')
  }
  console.log(str)
})

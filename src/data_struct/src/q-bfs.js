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
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices() // 顶点数组
  const adjList = graph.getAdjList() // 图，字典
  const color = initializeColor(vertices) // 初始化每个顶点颜色
  const queue = new Queue()
  queue.enqueue(startVertex) // 入队列

  // 队列不为空
  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u) // 获取相邻的顶点列表
    color[u] = Colors.GREY
    neighbors.forEach((item) => {
      if (color[item] === Colors.WHITE) {
        color[item] = Colors.GREY
        queue.enqueue(item)
      }
    })
    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }
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
breadthFirstSearch(graph, myVertices[0], console.log)
// A B C D E F G H I

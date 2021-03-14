const Dictionary = require('./h-dictionary')

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected // 是否有向
    this.vertices = [] // 数组存储顶点
    this.adjList = new Dictionary() // 存储接邻表
  }

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  // 添加顶点之间的边，v, w两个顶点
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      // 如果无向，添加一条回去的边
      this.adjList.get(w).push(v)
    }
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }

  toString() {
    let str = ''
    this.vertices.forEach((item) => {
      str += `${item} -> `
      this.adjList.get(item).forEach((subItem) => {
        str += `${subItem}`
      })
      str += '\n'
    })
    return str
  }
}

module.exports = Graph

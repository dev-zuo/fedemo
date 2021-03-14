const expect = require('chai').expect
const Graph = require('../src/p-graph')
let graph = null
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

describe('graph test', () => {
  beforeEach(() => {
    graph = new Graph()
    myVertices.forEach((item) => graph.addVertex(item))
  })

  it('grap base', () => {
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    expect(graph.toString()).to.equal(
      'A -> BCD\nB -> A\nC -> A\nD -> A\nE -> \nF -> \nG -> \nH -> \nI -> \n'
    )
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')
    console.log(graph.toString())
  })
})
// A -> BCD
// B -> AEF
// C -> ADG
// D -> ACGH
// E -> BI
// F -> B
// G -> CD
// H -> D
// I -> E

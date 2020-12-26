const Stack = require('./2-stack-obj')
function hanoi(n, source, dest, depend, a, b, c, moves = []) {
  if (n === 0) {
    return
  }
  hanoi(n - 1, source, depend, dest, a, c, b, moves) // 将 n - 1 个圆盘从 source 移动到 depend
  moves.push([a, b])
  dest.push(source.pop()) // 将第 n 个圆盘从 source 移动到 dest
  hanoi(n - 1, depend, dest, source, c, b, a, moves) // 将 n - 1 个圆盘从 depend 移动到 dest
}
function hanoiStack(n) {
  let source = new Stack()
  let dest = new Stack()
  let depend = new Stack()
  let count = n
  while (count) {
    source.push(count--)
  }
  let moves = []
  // console.log('source: ', source)
  hanoi(n, source, dest, depend, 'A', 'B', 'C', moves)
  // console.log('source: ', source)
  // console.log('dest: ', dest)
  // console.log('depend: ', depend)
  // console.log('moves', moves)
  // console.log('moves.length', moves.length)
  return moves
}
console.log(hanoiStack(3))

function hanoiRecursion(n, a, b, c, moves = []) {
  if (n === 0) {
    return moves
  }
  hanoiRecursion(n - 1, a, c, b, moves) // 将 n -1 个圆盘从 a 移动到 c，借助 b
  moves.push([a, b]) // move(n, a, b) // 将第 n 个圆盘从 a 移动到 b
  hanoiRecursion(n - 1, c, b, a, moves) // 将 n -1 个圆盘从 c 移动到 b，借助 a
  return moves
}
let moves = hanoiRecursion(3, 'A', 'B', 'C')
console.log('移动路径', moves)
console.log('移动次数', moves.length)
// // 移动路径
// // [
// //  ["A", "B"], ["A", "C"], ["B", "C"], ["A", "B"],
// //  ["C", "A"], ["C", "B"], ["A", "B"]
// // ]
// // 移动次数 7

module.exports = {
  hanoiStack,
  hanoiRecursion,
}

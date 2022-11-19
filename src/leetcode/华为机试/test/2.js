// https://www.peiluming.com/article/63
// 字符串分割
// 水仙花数
// 给定非空字符在s，将该字符串分割成一些子串，使每个子串的ASCIIA码值的和均为水仙花数。
// https://blog.nowcoder.net/n/06028fd4bbad4d0abaf479e7f30cb740
function b() {
  function isSxhNum(num) {
    // 不是三位数
    if(num < 100 || num > 999) {
      return false
    }
    let n1 = Math.floor(num / 100)
    let n2 = num - (n1 * 100)
  }
}

console.log(b())
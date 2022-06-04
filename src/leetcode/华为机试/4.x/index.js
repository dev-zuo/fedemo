/**
 * @description 求有多少种跳跃方式
 * @param {number} n 台阶数
 */
function getJumpMethodCount(n) {
    if (n < 2) {
        return 1
    }
    let arr = [1, 1, 1, 2]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + (arr[i - 3] || 0)
    }
    // console.log(arr)
    return arr[n]
}

console.log(getJumpMethodCount(50))
console.log(getJumpMethodCount(3))
// 122106097
// 2

/**
 * @description 两个数组各取一个元素
 * @param {Array<number>} arrA 
 * @param {Array<number>} arrB 
 * @param {*} n 取出数据的对数 
 */
function getMinSum(arrA, arrB, n) {
    let arr = []
    for (let i = 0, lenA = arrA.length; i < lenA; i++) {
        let a = arrA[i]
        for (let j = 0, lenB = arrB.length; j < lenB; j++) {
            let b = arrB[j]
            arr.push(a + b)
        }
    }
    arr.sort()
    // console.log(arr)
    let sum = 0
    for (let k = 0; k < n; k++) {
        sum += arr[k]
    }
    return sum
}

console.log(getMinSum([1, 1, 2], [1, 2, 3], 2)) // 4
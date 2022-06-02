
// 0 1
// 1 11
// 2 21
// 3 1211
// 4 111221
// 5 312211
// 6 13112221
// 7 1113213211
// 8 
// 9
let start = ''
let end = ''
// function getNumber(n) {
//     start = +new Date()
//     if (n === 0) {
//         return 1
//     }
//     // let arr = [];
//     // arr[0] = 1;
//     let str = `1`
//     for (let i = 1; i <= n; i++) {
//         // let str = arr[i - 1] + ''
//         let result = ''
//         let tempNum = ''
//         let tempNumCont = 0
//         for (let j = 0, len = str.length; j < len; j++) {
//             // 第一次遇到该字符
//             if (tempNum === '') {
//                 tempNum = str[j]
//                 tempNumCont++
//             } else if (tempNum === str[j]) {
//                 // 第 n 次遇到该值
//                 tempNumCont++
//             } else {
//                 // 出现新值了，保存原值结果，开启新的值
//                 result += `${tempNumCont}${tempNum}`
//                 tempNum = str[j]
//                 tempNumCont = 1
//             }
//         }
//         // 最后收尾
//         result += `${tempNumCont}${tempNum}`
//         // arr[i] = result
//         str = result
//     }
//     end = +new Date()
//     console.log(`耗时`, (end - start) / 1000)
//     // return arr[n]
//     return str
// }
function getNumber(n) {
    start = +new Date()
    if (n === 0) {
        return 1
    }
    // let arr = [];
    // arr[0] = 1;
    let str = `1`
    for (let i = 1; i <= n; i++) {
        // let str = arr[i - 1] + ''
        let result = ''
        let tempNum = str[0]
        let tempNumCont = 1
        for (let j = 1, len = str.length; j < len; j++) {
            if (tempNum === str[j]) {
                // 第 n 次遇到该值
                tempNumCont++
            } else {
                // 出现新值了，保存原值结果，开启新的值
                result += `${tempNumCont}${tempNum}`
                tempNum = str[j]
                tempNumCont = 1
            }
        }
        // 最后收尾
        result += `${tempNumCont}${tempNum}`
        // arr[i] = result
        str = result
    }
    end = +new Date()
    console.log(`耗时`, (end - start) / 1000)
    // return arr[n]
    return str
}

console.log(0, getNumber(0))
console.log(1, getNumber(1))
console.log(2, getNumber(2))
console.log(3, getNumber(3))
console.log(4, getNumber(4))
console.log(5, getNumber(5))
console.log(6, getNumber(6))
console.log(7, getNumber(7))
console.log(8, getNumber(8))
console.log(9, getNumber(9))
console.log(10, getNumber(10))
console.log(getNumber(59)[0]) //  5.444s


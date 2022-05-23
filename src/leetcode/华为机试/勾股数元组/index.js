
function calcSquareNumbers(n, m) {
    // 判断 a、b 是否互质（最大公约数为1）
    // 更多方法，参考：https://baike.baidu.com/item/互质数/6147106
    const isPrime = (a, b) => {
        if (a === b) {
            return false
        }
        let [max, min] = a - b > 0 ? [a, b] : [b, a]
        // 3 - 9, 找公约数，从 1 - 最小值
        for (let i = 1; i <= min; i++) {
            if (min % i === 0 && max % i === 0 && i !== 1) {
                return false
            }
        }
        return true
    }

    if (n === m) {
        return 'NaN'
    }

    let arr = []
    for (let i = n; i < m; i++) {
        for (let j = i + 1; j <= m; j++) {
            let squareSum = i * i + j * j;
            let s = Math.sqrt(squareSum)
            if (Number.isInteger(s) && s <= m && isPrime(s, i) && isPrime(s, j) && isPrime(i, j)) {
                arr.push([i, j, s])
            }
        }
    }
    if (!arr.length) {
        arr = 'NaN'
    }
    console.log(arr)
}

const funcWithTime = (func) => {
    return (...args) => {
        let startTime = +new Date()
        func.call(null, ...args)
        let endTime = +new Date()
        console.log(`耗时：${(endTime - startTime) / 1000}s`)
    }
   
}
let calcSquareNumbersWithTime = funcWithTime(calcSquareNumbers)

calcSquareNumbersWithTime(1, 20)
calcSquareNumbersWithTime(5, 10)
// calcSquareNumbersWithTime(1, 100000) // 10w 17.9s 
// calcSquareNumbersWithTime(1, 10000) // 0.226s
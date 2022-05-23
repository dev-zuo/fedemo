
// 蛋糕重量 0	1	2	3	4	5	6
//    售价  0	2	3	6	7	11	15
let priceList = [0, 2, 3, 6, 7, 11, 15]

function maxCakePrice(n) {
    if (n <= 1) {
        return priceList[n]
    }
    // 可能会有下面这种多种情况，取下面的最大值
    // maxCakePrice(n-1) + maxCakePrice(1)
    // ...
    // maxCakePrice(n-i) + maxCakePrice(i)
    // ...
    // maxCakePrice(n-2) + maxCakePrice(2)
    let max = 0
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        let result = maxCakePrice(i) + maxCakePrice(n-i)
        if (result > max) {
            max = result
        }
    }
    return max
}

for (let n = 0, len = 10; n < len; n++) {
    console.log(maxCakePrice(n))
}
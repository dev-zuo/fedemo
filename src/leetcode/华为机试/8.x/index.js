
function getMaxSpend(priceList, budget) {
    // 23,26,36,27
    // 78
    let len = priceList.length
    let max = -1
    let maxArr = []
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                console.log(i, j, k)
                let price = priceList[i] + priceList[j] + priceList[k]
                if (price < budget && price > max) {
                    max = price
                    maxArr = [priceList[i],priceList[j],priceList[k]]
                }
            }
        }
    }
    return { max, maxArr }
}
console.log(getMaxSpend([23,26,36,27], 78)) // { max: 76, maxArr: [ 23, 26, 27 ] }
console.log(getMaxSpend([23,30,40], 26)) // { max: -1, maxArr: [] }

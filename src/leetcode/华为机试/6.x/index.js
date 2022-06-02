
/**
 * @description
 * @param {*} baseHeight 
 * @param {*} heightList 
 */
function getSortArr(baseHeight, heightList) {
    function insertHeightToArr(arr, insertHeight) {
        if (arr.length === 0) {
            arr.push(insertHeight);
            return arr
        }
        let insertHeightGap  = Math.abs(insertHeight - baseHeight)
        let insertIndex = ''
        for (let i = 0, len = arr.length; i <= len; i++) {
            let curHeightGap = Math.abs(arr[i] - baseHeight)
            if (insertHeightGap < curHeightGap) {
                insertIndex = i
                break;
            } else if (insertHeightGap === curHeightGap) {
                if (insertHeight <= arr[i]) {
                    insertIndex = i
                    break;
                }
                // 大于，继续向下比较
            }
        }
        if (insertIndex === '') {
            insertIndex = arr.length
        }
        
        // 拼接数组
        let result =  arr.slice(0, insertIndex).concat([insertHeight]).concat(arr.slice(insertIndex, arr.length))
        // console.log('insertIndex', insertIndex, result)
        return result
    }
   let resultArr = []
   for (let i = 0, len = heightList.length; i < len; i++) {
       let curHeight = heightList[i]
       // 寻找新插入元素在 resultArr 中的顺序
       resultArr = insertHeightToArr(resultArr, curHeight)
   }
   return resultArr
}

console.log(getSortArr(100, [ 95,96,97,98,99, 101, 102, 103, 104, 105])) 
console.log(getSortArr(100, [ 92,103,160,105,95,96,80,98,99,101])) 

// [
//     99, 101, 98, 102,
//     97, 103, 96, 104,
//     95, 105
//   ]
// [
//     99, 101, 98, 103,  96,
//     95, 105, 92,  80, 160
//   ]


   // 100 10
   // 95 96 97 98 99 101 102 103 104 105
   // 99 101 98 102 97 103 96 104 95 105
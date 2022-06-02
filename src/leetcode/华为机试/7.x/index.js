
function reverseStr(str, start, end) {
    let arr = str.split(' ')
    let len = arr.length
    // start/end  < 数组长度
    start >= len && (start = len - 1);
    end >= len && (end = len - 1);

    let alreadyHandlerList = {}
    for (let i = start; i <= end ; i++ ) {
        // 已交换
        if (alreadyHandlerList[i] || alreadyHandlerList[len - i - 1]) {
            continue
        }
        // 交换
        let t = arr[i]
        arr[i] = arr[len - i - 1]
        arr[len - i - 1] = t
        // 标记已交换
        alreadyHandlerList[i] = true
        alreadyHandlerList[len - i - 1] = true
    }
    // console.log(arr)
    return arr.join(' ')
}

console.log(reverseStr('I am a developer.', 0, 3))
console.log(reverseStr('hello world!', 0, 3))
console.log(reverseStr('I am a developer. How are you!', 2, 5))
// developer. a am I
// world! helloI
// I are How developer. a am you!
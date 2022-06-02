/**
 * @description 在GPU不空闲的情况下计算任务执行时间
 * @param {*} maxExecPerSec GPU 每秒最大执行任务数
 * @param {Array<number>} taskList 任务数组，Array<每秒新增的任务数>
 */
function getTimeExecTask(maxExecPerSec, taskList) {
    // 3 [1, 2, 3, 4, 5]
    let sec = 0 // 执行所需秒数
    let restTaskNum = 0 // 剩余任务数
    for (let i = 0, len = taskList.length; i < len; i++) {
        let curTaskNum = taskList[i] + restTaskNum
        sec++;
        restTaskNum = maxExecPerSec >= curTaskNum ? 0 : (curTaskNum - maxExecPerSec)
    }
    let result = Math.ceil(restTaskNum / maxExecPerSec) + sec 
    return result
}

console.log(getTimeExecTask(3, [1, 2, 3, 4, 5])) // 6
console.log(getTimeExecTask(3, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1])) // 11
console.log(getTimeExecTask(4, [5,4,1,1,1])) // 5

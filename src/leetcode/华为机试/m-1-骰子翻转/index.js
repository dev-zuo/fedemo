// 题目描述
// 骰子是一个立方体，每个面一个数字，初始为左1 右2 前3 （观察者方向） 后4 上5 下6 
// 用 1 2 3 4 5 6表示这个状态 放置在平面上 可以向左翻转（用L表示向左翻转一次） 
// 可以向右翻转（用R表示向右翻转一次） 可以向前翻转（用F表示向前翻转一次）
// 可以向后翻转（用B表示向后翻转一次）可以逆时针旋转（用A表示逆时针旋转90度）
// 可以顺时针旋转（用C表示顺时针旋转90度）
// 现在从123456这个初始状态开始 根据输入的动作序列 计算最终的状态
// 原题有图 我这没得。。。

// 输入描述：
// 输入一行 为只包含LRFBAC的字母序列 最大长度50 字母可以重复
// 输出描述：
// 输出最终状态
// 试例
// 输入LR
// 输出123456

// https://www.peiluming.com/article/62

function getDiceResult(cmdStr, initInfo = '123456') {
    let [left, right, front, back, top, bottom] = initInfo.split('')
    const doAction =  (cmd) => {
        switch (cmd) {
            case 'L':
            case 'C':
                // left => back, back => right, right => front, front => left
                [back, right, front, left] = [left, back, right, front]
                break;
            case 'R':
            case 'A':
                // left => front, front => right, right => back, back => left
                [front, right, back, left] = [left, front, right, back]
                break;
            case 'F':
                // front => bottom, bottom => back, back => top, top => front
                [bottom, back, top, front] = [front, bottom, back, top]
                break;
            case 'B':
                // front => top, top => back, back => bottom, bottom => front
                [top, back, bottom, front] = [front, top, back, bottom]
                break;
        }
    }
    for (let i = 0, len = cmdStr.length; i < len; i++) {
        doAction(cmdStr[i])
        console.log(cmdStr[i], `${left}${right}${front}${back}${top}${bottom}`)
    }
    return `${left}${right}${front}${back}${top}${bottom}`
}

console.log(getDiceResult('LR'))
console.log(getDiceResult('BF'))
console.log(getDiceResult('LB'))
console.log(getDiceResult('FCR'))
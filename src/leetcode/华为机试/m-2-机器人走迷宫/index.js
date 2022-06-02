
function getTrapAndUnreachable(x, y, wallList) {
    // 生成 x * y 二维数组，并设置墙
    const getMap = () => {
        let mapList = new Array(x)
        for (let i = 0; i < x; i++) {
            mapList[i] = new Array(y).fill('')
        }
        wallList.forEach(([x, y])=> {
            // console.log(x, y)
            mapList[x][y] = 'wall'
        })
        console.log(mapList)
        return mapList
    }

    let mapList = getMap()
    let reachable = 0
    // 从终点遍历，能够到达终点的点
    const backSearchFill = (x, y) => {
        mapList[x][y] = 'reachable' // 必定可达
        reachable++ // reachable 数++
        // x, y 可到达终点，则左(x - 1, y)、下(x, y - 1)都可达
        // console.log(x, y,[x - 1, y], [x, y - 1])
        if (x - 1 < 0 && y - 1 < 0) {
            return // 如果左下两个坐标不满足条件，直接退出
        }
        // 左侧查找, 如果左边(x - 1, y)没超出坐标范围，且不是墙, 标记可达，并继续向下递归寻找
        if (x - 1 >= 0 && !['wall', 'reachable'].includes(mapList[x - 1][y])) {
            backSearchFill(x - 1, y)
        }
        // 下查找（根据上面的规律：在范围内，不是墙）
        if (y - 1 >= 0 && !['wall', 'reachable'].includes(mapList[x][y-1])) {
            backSearchFill(x, y - 1)
        } else {
            return
        }
    }
    backSearchFill(x - 1, y - 1)
    let trapCount = x * y - reachable - wallList.length
    console.log(mapList, `陷阱（不能到达终点的点个数）：${trapCount}`)

    // 重新初始化
    mapList = getMap()
    reachable = 0
    let maxX = x - 1;
    let maxY = y - 1;
    // 从起点遍历，能够从起点到达的点
    const frontSearchFill = (x, y) =>  {
        mapList[x][y] = 'reachable' // 必定可达
        reachable++ // reachable 数++
        // x, y 能够从起点达到，则右(x + 1, y)、上(x, y + 1)都能从起点到达
        // console.log(x, y,[x + 1, y], [x, y + 1])
        if (x + 1 > maxX && y + 1 > maxY) {
            return // 如果左下两个坐标不满足条件，直接退出
        }
        // 右侧查找, 如果右边(x + 1, y)没超出坐标范围，且不是墙, 且没标记为可达，并继续向下递归寻找
        if (x + 1 <= maxX && !['wall', 'reachable'].includes(mapList[x + 1][y])) {
            frontSearchFill(x + 1, y)
        }
        // 上查找（根据上面的规律：在范围内，不是墙）
        if (y + 1 <= maxY && !['wall', 'reachable'].includes(mapList[x][y + 1])) {
            frontSearchFill(x, y + 1)
        } else {
            return
        }
    }
    frontSearchFill(0, 0)
    let unreachableCount = x * y - reachable - wallList.length
    console.log(mapList, `不可达（不能从起点到达的点）：${unreachableCount}`)

    console.log(trapCount, unreachableCount)
}

console.log(getTrapAndUnreachable(6, 4, [[0, 2], [1, 2], [2,2], [4,1], [5,1]]))
// [
//     [ '', '', 'wall', '' ],
//     [ '', '', 'wall', '' ],
//     [ '', '', 'wall', '' ],
//     [ '', '', '', '' ],    
//     [ '', 'wall', '', '' ],
//     [ '', 'wall', '', '' ] 
//   ]
//   [
//     [ 'reachable', 'reachable', 'wall', 'reachable' ],
//     [ 'reachable', 'reachable', 'wall', 'reachable' ],
//     [ 'reachable', 'reachable', 'wall', 'reachable' ],
//     [ 'reachable', 'reachable', 'reachable', 'reachable' ],
//     [ '', 'wall', 'reachable', 'reachable' ],
//     [ '', 'wall', 'reachable', 'reachable' ]
//   ] 陷阱（不能到达终点的点个数）：2
//   [
//     [ '', '', 'wall', '' ],
//     [ '', '', 'wall', '' ],
//     [ '', '', 'wall', '' ],
//     [ '', '', '', '' ],
//     [ '', 'wall', '', '' ],
//     [ '', 'wall', '', '' ]
//   ]
//   [
//     [ 'reachable', 'reachable', 'wall', '' ],
//     [ 'reachable', 'reachable', 'wall', '' ],
//     [ 'reachable', 'reachable', 'wall', '' ],
//     [ 'reachable', 'reachable', 'reachable', 'reachable' ],
//     [ 'reachable', 'wall', 'reachable', 'reachable' ],
//     [ 'reachable', 'wall', 'reachable', 'reachable' ]
//   ] 不可达（不能从起点到达的点）：3
//   2 3
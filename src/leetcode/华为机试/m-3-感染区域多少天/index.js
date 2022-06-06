/**
 * @description 获取感染所有所需天数
 * @param {string} mapStr n*n地图字符串：1,0,1,0,0,0,1,0,1
 */
function getInfectAllDays(mapStr) {
  // 没有感染区域 || 全部为感染
  if (!mapStr.includes('1') || !mapStr.includes('0')) {
    return -1
  }
  // 求出 n
  let mapArr = mapStr.split(',').map(item => parseInt(item))
  let len = mapArr.length
  let n = Math.sqrt(len)
  // 生成地图二维数组
  let map = []
  for (let i = 0; i < n; i++) {
    // 0 , 1 , 2
    // 0 3, 3 6, 6, 9
    map.push(mapArr.slice(i * n, i * n + n))
  }
  console.log(map)
  // 初始化所需天数
  let days = 0
  let isInfectAll = false
  // 开始感染
  while(!isInfectAll) {
    days++
    console.log(`第${days}天`)
    // 如果没有越界，设置值
    const setPositionInfect = (x, y) => {
      if (x >= 0 && x <= n - 1 && y >= 0 && y <= n - 1) {
        map[x][y] === 0 && (map[x][y] = 'infect') // 为了区分是当天被感染的，还是本来就是已感染的
      }
    }
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        // 如果没有感染
        if (map[x][y] === 1) {
          // 上下左右
          setPositionInfect(x, y - 1)
          setPositionInfect(x, y + 1)
          setPositionInfect(x - 1, y)
          setPositionInfect(x + 1, y)
        }
      }
    }
    console.log(map, days)
    const getIsInfectionAll = (map) => {
      let isOk = true
      for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
          if (map[x][y] === 'infect') {
            map[x][y] = 1
          }
          if (map[x][y] === 0) {
            isOk = false
          }
        }
      }
      return isOk
    }
    // 判断是否已全部感染，如果没有全部设置为 1
    isInfectAll = getIsInfectionAll(map)
    console.log(map, days)
  }
  return days
}

console.log(getInfectAllDays('1,0,1,0,0,0,1,0,1'))
console.log(getInfectAllDays('1,1,1,1,1,1,1,1,1'))
console.log(getInfectAllDays('0,0,0,0,0,0,0,0,0'))
// [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]
// 第1天
// [ [ 1, 'infect', 1 ], [ 'infect', 0, 'infect' ], [ 1, 'infect', 1 ] ] 1
// [ [ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ] 1
// 第2天
// [ [ 1, 1, 1 ], [ 1, 'infect', 1 ], [ 1, 1, 1 ] ] 2
// [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ] 2
// 2
// -1
// -1
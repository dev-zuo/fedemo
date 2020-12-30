const Queue = require('./7-queue-obj')

/**
 * 进行击鼓传花游戏，每循环 num 次时踢出一个人
 * @param {*} elementList 名单 ['张三', '李四', '王五']
 * @param {*} num 每循环多少次踢出去一个人
 */
function hotPotato(elementList, num) {
  const queue = new Queue()
  const eliminateList = [] // 淘汰列表 [ɪˈlɪmɪneɪt]
  // 将名单中的人加入队列
  elementList.forEach((item) => queue.enqueue(item))
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 传递 num 次后踢出一个人
    eliminateList.push(queue.dequeue())
  }
  return {
    eliminateList: eliminateList,
    winner: queue.dequeue(),
  }
}

module.exports = hotPotato

/**
 * debounce
 * @param { Function } func 执行函数
 * @param { Interger } time 延时执行间隔
 * @returns function 返回经过防抖处理的函数
 */
function debounce(func, time) {
  let timer = null // 定时任务计时器
  // 返回一个经过防抖处理的 func
  return (...args) => {
    if (timer) {
      // 如果上一次定时任务还在等待执行的过程中，取消定时任务
      clearTimeout(timer)
      console.log('取消上一次的计时任务')
    }

    console.log(`重新开启定时任务，${time} 毫秒后真正执行`)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, time);
  }
}

/**
 * throttle
 * @param { Function } func 执行函数
 * @param { Interger } time 多长时间内不能第二次执行
 * @returns function 返回经过节流处理的函数
 */
 function throttle(func, time) {
  let isLock = false // 是否冷却(cooldown)中
  // 返回一个经过节流处理的 func
  return (...args) => {
    if (isLock) { // 如果是冷却中，不执行函数
      console.log('冷却(cd)中...')
      return 
    }
    // 非冷却中
    func.apply(this, args) // 执行函数
    isLock = true // 执行函数后设置为冷却中
    setTimeout(() => {
      isLock = false // 经过 time 微秒后，设置为非冷却中
    }, time);
  }
}
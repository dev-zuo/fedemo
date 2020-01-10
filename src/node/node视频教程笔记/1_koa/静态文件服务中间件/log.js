
class Logger {
  constructor() {
    this.logs = []
  }

  log() {
    return async (ctx, next) => {
      // 记录进入时间
      let temp = {}
      let startTime = +(new Date()) 
      let endTime
      await next()
      endTime = +(new Date())  // 结束时间
      Object.assign(temp, {
        startTime,
        endTime,
        url: ctx.url,
        resTime: (endTime - startTime) + 'ms'
      })
      this.logs.push(temp)
      console.log(this.showLogs())
    }
  }

  showLogs() {
    console.log(this.logs)
  }

}

module.exports = Logger
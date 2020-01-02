@sealed
class Gretter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `hello, ${this.greeting}`
  }
}

// @sealed装饰器定义
function sealed(constructor: Function) {
  console.log('开始了装饰器增强')
  constructor.prototype.a = 1
  constructor.prototype.sayNo = function() {
    return 'No'
  }
  // Object.seal(constructor)
  // Object.seal(constructor.prototype)
}

// let gretter = new Gretter('tom')
// console.log(gretter) // Gretter { greeting: 'tom' }
// console.log(gretter.greet()) // hello, tom
// console.log(gretter.a) // 1
// console.log(gretter.sayNo()) // No

// // 这里为了看看 console.log('开始了装饰器增强')，是否每次在new时都会执行
// let gretter2 = new Gretter('jack')
// console.log(gretter2.sayNo()) // No
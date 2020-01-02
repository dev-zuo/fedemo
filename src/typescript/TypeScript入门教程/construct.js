
class A {
  constructor() {
    this.a = 1
  }
}

// 尝试改变A的constructor
console.log(A.constructor)
A.constructor = function() {
  console.log('constructor 改变')
  this.a = 2
}

let a = new A()
console.log(a) // A { a: 1 }  
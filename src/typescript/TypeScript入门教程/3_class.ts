class Animal {
  private name;
  // protected name;
  public constructor(name) {
    this.name = name
  }
  get getName() {
    return this.name
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log('cat', name)
  }
  get catName() {
    return this.name
  }
}
let a = new Animal('Jack')
console.log(a.getName) // Jack
console.log(a.name) // Error
a.name = 'Tom' // Error
// Property 'name' is private and only accessible within class 'Animal'.

let ce = new Cat('xx')
console.log(ce.name) // Error 不管是protected还是private
console.log(ce.catName) // protected name 则ok，private name 则Error
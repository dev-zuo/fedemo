
@classDecorator
class Greeter {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m
  }
} 
console.log(new Greeter('world')) // 未加装饰器之前：Greeter { property: 'property', hello: 'world' }
console.log(new Greeter('world2')) 
  
function classDecorator<T extends {new(...args:any[]):{}}>(constructor: T) {
  // 每次执行都会执行下面函数体的内容
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      console.log('new 发生了')
    }
    newProperty = 'new Property';
    // hello = 'override'; // 如果打开，所有的hello都将是override
  }
}

// new 发生了
// class_1 {
//   property: 'property',
//   hello: 'world',
//   newProperty: 'new Property' }
// new 发生了
// class_1 {
//   property: 'property',
//   hello: 'world2',
//   newProperty: 'new Property' }

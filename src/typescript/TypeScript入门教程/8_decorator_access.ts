function Enumerable( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
  //make the method enumerable
  descriptor.enumerable = false; // 没用本来就是可访问的

  // 无法修改value 
  // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
  // descriptor.value = function(...args: any[]) {
  //   // const method = descriptor.value
  //   // let result = method.apply(this, args)
  //   // return this._name + '无脑赋值'
  // }
}

class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // @Enumerable
  get name() {
    return this._name;
  }
}

console.log("-- creating instance --");
let person = new Person("tom");
console.log("-- looping --");
for (let key in person) {
  console.log(key + " = " + person[key]);
}
// 不加装饰器的情况
// -- creating instance --
// -- looping --
// _name = tom
// name = tom

// 加了装饰器的情况
// -- creating instance --
// -- looping --
// _name = tom
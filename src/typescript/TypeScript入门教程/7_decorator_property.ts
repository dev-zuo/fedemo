function setDefaultValue(target: Object, propertyName: string) {
  // 对于不同属性，target为类的原型对象
  console.log(target, propertyName) // Person {} 'name'
  target[propertyName] = "Tom";
}

function setDefaultValueStatic(target: Object, propertyName: string) {
  // 对于静态属性，target为类的构造函数
  console.log(target, propertyName) // { [Function: Person] displayName: 'PersonClass' } 'displayName'
  target[propertyName] = "Static Tom";
}

class Person {
  @setDefaultValue
  name: string;

  @setDefaultValueStatic
  static displayName = 'PersonClass'
}

console.log(new Person()) // Person {}
console.log(new Person().name); // Tom
console.log(Person.displayName); // Static Tom

// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的key。
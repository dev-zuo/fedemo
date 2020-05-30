
console.log('object 遍历测试')

// 1. 安排 继承属性
function A() {
  this['99'] =  2,
  this.parentA = '1'
}
let a = new A()
// 原型继承，只是将a的原型属性挂载到了myObject上
let myObject = Object.create(a)
// 测试继承来的原型属性 
console.log('myObject.parentA', myObject.parentA)

// 2. 安排各种常规属性、symbol属性，数值属性
Object.assign(myObject, {
  foo: 1,
  baz: 2,
  "2": "798",
  "1": "123",
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4
})

// 3. 安排两个不可枚举属性
Object.defineProperties(myObject, {
  notEnumProp1: { 
    configurable: false,
    enumerable: false,
    writable: false,
    value: 27
  },
  '9999': {
    enumerable: false,
    value: "test9999"
  },
  [Symbol.for('notEnumSymbol')]: {
    enumerable: false,
    value: "test9999"
  }
})

// 4. 测试
let forInArr = []
for (let item in myObject) {
  forInArr.push(item)
}
console.log('for...in', forInArr)

console.log('Object.keys', Object.keys(myObject))
console.log('Object.values', Object.values(myObject))
console.log('Object.entries', Object.entries(myObject))

console.log('Object.getOwnPropertyNames', Object.getOwnPropertyNames(myObject))
console.log('Object.getOwnPropertySymbols', Object.getOwnPropertySymbols(myObject))

console.log('Reflect.ownKeys', Reflect.ownKeys(myObject))
// console.log('Reflect.ownValues', Reflect.ownValues(myObject)) // 仅在tc39文档里讨论过
// console.log('Reflect.ownEntries', Reflect.ownEntries(myObject)) // 仅在tc39文档里讨论过

console.log('Object.getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(myObject))

// import "@babel/polyfill";

const arr = [new Promise(() => {}), new Promise(() => {})];

let a = ''
let b = false

let obj = { sayHi: () => console.log('hi') }
console.log('a: ', a ?? 'a')
console.log('b: ', b ?? 'b')

arr.map(item => { console.log(item);});

obj.sayHi()
console.log('obj.sayHello?.()', obj.sayHello?.())
console.log('obj.sayHello()', obj.sayHello())
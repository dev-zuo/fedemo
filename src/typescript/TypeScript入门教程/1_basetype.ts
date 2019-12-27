

let boolean: boolean = true
let boolean2: boolean = Boolean(1)
// let createdBoolean: boolean = new Boolean(1) 

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let namestr: string = 'Tom'
let str: string = `Hello, ${namestr}`

let u: undefined = undefined
let n: null = null
let num2: string = null

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]


// let u2: void = undefined
// let num4: number = u2

enum Color {Red, Green, Blue} // 默认从0开始为元素编号
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(c, colorName)

let testNumber = 'six'
// testNumber = 6 // Error


let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
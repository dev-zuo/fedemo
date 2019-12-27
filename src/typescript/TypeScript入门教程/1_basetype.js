var boolean = true;
var boolean2 = Boolean(1);
// let createdBoolean: boolean = new Boolean(1) 
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var namestr = 'Tom';
var str = "Hello, " + namestr;
var u = undefined;
var n = null;
var num2 = null;
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// let u2: void = undefined
// let num4: number = u2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // 默认从0开始为元素编号
var c = Color.Green;
var colorName = Color[2];
console.log(c, colorName);

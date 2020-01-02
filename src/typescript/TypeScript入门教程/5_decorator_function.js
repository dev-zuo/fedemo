var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.goNext = function () {
        console.log('gotonext');
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    __decorate([
        staticTest()
    ], Greeter, "goNext", null);
    return Greeter;
}());
function staticTest() {
    return function (target, propertyKey, descriptor) {
        console.log('静态方法');
        console.log(target, propertyKey, descriptor);
    };
}
function enumerable(value) {
    // console.log(value)
    return function (target, propertyKey, descriptor) {
        console.log('返回的新方法');
        console.log(target, propertyKey, descriptor);
        // Greeter { greet: [Function] }
        // 'greet'
        // { value: [Function],
        //   writable: true,
        //   enumerable: true,
        //   configurable: true }
        // descriptor.enumerable = value; 原demo比较鸡肋，这个貌似都是不可枚举的
        // 用Refect.ownKeys() 才能遍历出 返回自身的所有属性、函数，不管是否可枚举，包括symbol
        // 关于for...in,Object.keys()遍历的区别，参见原来的笔记: https://www.yuque.com/guoqzuo/js_es6/rxu7ms
        // 那我们还是改 descriptor 的value吧
        var method = descriptor.value; // 将函数的值 () => { return `Hello, ${this.greeting}`} 保存到变量里
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // 先执行原来的方法
            var result = method.apply(this, args);
            // 增强部分
            // 这里可以执行其他的一些额外操作
            console.log('原计算结果为: ', result);
            var newRes = 'No, ' + this.greeting;
            console.log('但我在这里把结果改为了', newRes);
            return newRes;
        };
    };
}
// 这里会打印: 返回的新方法
var a = new Greeter('hello');
console.log(a);
console.log(Object.keys(a));
console.log(a.greet());
var a2 = new Greeter('hello2');
console.log(a2);
console.log(Object.keys(a2));
console.log(a2.greet());
// Greeter { greeting: 'hello' }
// [ 'greeting' ]
// 原计算结果为:  Hello, hello
// 但我在这里把结果改为了 No, hello
// No, hello
// Greeter { greeting: 'hello2' }
// [ 'greeting' ]
// 原计算结果为:  Hello, hello2
// 但我在这里把结果改为了 No, hello2
// No, hello2

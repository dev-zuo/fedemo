var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Gretter = /** @class */ (function () {
    function Gretter(message) {
        this.greeting = message;
    }
    Gretter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    Gretter = __decorate([
        sealed
    ], Gretter);
    return Gretter;
}());
// @sealed装饰器定义
function sealed(constructor) {
    console.log('开始了装饰器增强');
    constructor.prototype.a = 1;
    constructor.prototype.sayNo = function () {
        return 'No';
    };
    // Object.seal(constructor)
    // Object.seal(constructor.prototype)
}
// let gretter = new Gretter('tom')
// console.log(gretter) // Gretter { greeting: 'tom' }
// console.log(gretter.greet()) // hello, tom
// console.log(gretter.a) // 1
// console.log(gretter.sayNo()) // No
// // 这里为了看看 console.log('开始了装饰器增强')，是否每次在new时都会执行
// let gretter2 = new Gretter('jack')
// console.log(gretter2.sayNo()) // No

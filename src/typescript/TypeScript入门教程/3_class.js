var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // protected name;
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log('cat', name);
        return _this;
    }
    Object.defineProperty(Cat.prototype, "catName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}(Animal));
var a = new Animal('Jack');
console.log(a.getName); // Jack
console.log(a.name); // Error
a.name = 'Tom'; // Error
// Property 'name' is private and only accessible within class 'Animal'.
var ce = new Cat('xx');
console.log(ce.name); // Error
console.log(ce.catName); // ok

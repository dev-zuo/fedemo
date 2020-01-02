function Enumerable(target, propertyKey, descriptor) {
    //make the method enumerable
    descriptor.enumerable = false; // 没用本来就是可访问的
    // descriptor.value = function(...args: any[]) {
    //   // const method = descriptor.value
    //   // let result = method.apply(this, args)
    //   // return this._name + '无脑赋值'
    // }
}
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        // @Enumerable
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
console.log("-- creating instance --");
var person = new Person("Diana");
console.log("-- looping --");
for (var key in person) {
    console.log(key + " = " + person[key]);
}
// 不加装饰器的情况
// -- creating instance --
// -- looping --
// _name = Diana
// name = Diana
// 加了装饰器的情况
// -- creating instance --
// -- looping --
// _name = Diana

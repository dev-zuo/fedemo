var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function setDefaultValue(target, propertyName) {
    console.log(target, propertyName); // Person {} 'name'
    target[propertyName] = "Tom";
}
function setDefaultValueStatic(target, propertyName) {
    console.log(target, propertyName); // { [Function: Person] displayName: 'PersonClass' } 'displayName'
    target[propertyName] = "Static Tom";
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.displayName = 'PersonClass';
    __decorate([
        setDefaultValueStatic
    ], Person, "displayName", void 0);
    return Person;
}());
console.log(new Person()); // Person {}
console.log(new Person().name); // Tom
console.log(Person.displayName); // Static Tom

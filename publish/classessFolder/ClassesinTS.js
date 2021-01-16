"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstClass = void 0;
var FirstClass = /** @class */ (function () {
    function FirstClass(number2, name2) {
        this.name = "Niho";
        this.age = 20;
        this.varable1 = number2;
        this.name1 = name2;
    }
    FirstClass.prototype.show = function () {
        console.log(this.varable1 + " this is number " + this.name1 + " this is my name");
        return 5;
    };
    return FirstClass;
}());
exports.FirstClass = FirstClass;
var obj = new FirstClass(5, "Niho");
obj.show();

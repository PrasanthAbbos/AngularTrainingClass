"use strict";
var FirstClass = /** @class */ (function () {
    function FirstClass(number2, name2) {
        this.varable1 = number2;
        this.name1 = name2;
    }
    FirstClass.prototype.show = function () {
        console.log(this.varable1 + " this is number " + this.name1 + " this is my name");
    };
    return FirstClass;
}());
var obj = new FirstClass(5, "Niho");
obj.show();

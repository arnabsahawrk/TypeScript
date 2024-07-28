var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserClass1 = /** @class */ (function () {
    function UserClass1(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    UserClass1.prototype.display = function () {
        console.log("name: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return UserClass1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, id) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = id;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("name: ".concat(this.userName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    return Student;
}(UserClass1));
var student1 = new Student("Anisul", 31, 3234314);
student1.display();

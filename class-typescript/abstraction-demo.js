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
var AbstractUser = /** @class */ (function () {
    function AbstractUser(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return AbstractUser;
}());
var UserStudent = /** @class */ (function (_super) {
    __extends(UserStudent, _super);
    function UserStudent(userName, age, id) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = id;
        return _this;
    }
    UserStudent.prototype.display = function () {
        console.log("name: ".concat(this.userName, ", age: ").concat(this.age, " id: ").concat(this.studentId));
    };
    return UserStudent;
}(AbstractUser));
var studentUser1 = new UserStudent("Arnab Saha", 25, 43321423);
studentUser1.display();

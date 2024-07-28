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
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(courseName, duration) {
        this.courseName = courseName;
        this.duration = duration;
    }
    OnlineCourse.prototype.display = function () {
        console.log("Course Name: ".concat(this.courseName, "\n                 Duration: ").concat(this.duration, " Month"));
    };
    return OnlineCourse;
}());
var OfflineCourse = /** @class */ (function (_super) {
    __extends(OfflineCourse, _super);
    function OfflineCourse(courseName, duration, courseId) {
        var _this = _super.call(this, courseName, courseId) || this;
        _this.courseId = courseId;
        return _this;
    }
    //   display(): void {
    //     console.log(`Course Name: ${this.courseName}
    //         Duration: ${this.duration} Month
    //         Course Id: ${this.courseId}`);
    //   }
    OfflineCourse.prototype.setCourseId = function (id) {
        this.courseId = id;
    };
    OfflineCourse.prototype.getCourseId = function () {
        return this.courseId;
    };
    OfflineCourse.prototype.output = function () {
        console.log("Course Name: ".concat(this.courseName, "\n        Duration: ").concat(this.duration, "\n        Course Id: ").concat(this.courseId));
    };
    return OfflineCourse;
}(OnlineCourse));
// const OOP = new OfflineCourse("Object Oriented Programming", 2, 44343);
var DSA = new OnlineCourse("Object Oriented Programming", 5);
// DSA.courseName = "Data Structure & Algorithm"; //now it's protected this only can access from inheritance class
// DSA.display(); //Now it's private can's access from anywhere
var Django = new OfflineCourse("Django", 0.5, 55);
// console.log(Django.getCourseId());
// Django.setCourseId(43);
// console.log(Django.getCourseId());
// Django.duration = 1; I can only read the value but can't modify it
Django.output();

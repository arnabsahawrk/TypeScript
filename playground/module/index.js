"use strict";
// import { studentName as name, studentAge as age } from "./Student";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = require("./Student");
// const displayInfo = (): void => {
//   console.log(`Student Name: ${name}, Age: ${age}`);
// };
var displayInfo = function () {
    console.log("Student Name: ".concat(Student.studentName, ", Student Age: ").concat(Student.studentAge));
};
displayInfo();

// import { studentName as name, studentAge as age } from "./Student";

import * as Student from "./Student";

// const displayInfo = (): void => {
//   console.log(`Student Name: ${name}, Age: ${age}`);
// };

const displayInfo = (): void => {
  console.log(
    `Student Name: ${Student.studentName}, Student Age: ${Student.studentAge}`
  );
};

displayInfo();

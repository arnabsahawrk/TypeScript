let myName: string = "Arnab Saha";

console.log(myName);

const addNumbers = (num1: number, num2: number) => {
  console.log(num1 + num2);
};

addNumbers(5, 10);

//tsc index.ts -> index.js -> node index.js

//tsc index.ts --watch  (now not need to compile every time after changes)

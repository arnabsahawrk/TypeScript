const country = "I love Bangladesh";
console.log(country);

let a: (string | number)[] = [];
a.push("Arnab", 99);

console.log(a);

let c: {
  name: string;
  age: number;
  adult: boolean;
};

c = {
  name: "Arnab Saha",
  age: 25,
  adult: true,
};

console.log(c);

let d: object;

d = [5, 6, 7];

console.log(d);

let e: any[] = [];

e.push("Arnab", 99);
console.log(e);

let f: {
  name: any;
  age: any;
};

f = {
  name: 25,
  age: "Arnab",
};
console.log(f);

const myFunc: Function = () => {
  console.log("This is function type");
};

let myFunc2 = (a: string, b: string, d?: number, c: string = "Hello") => {
  console.log(c, d);
  return a + b;
};

myFunc2("Arnab", "Saha");

type stringOrNumb = number | string;
type userDetails = { name: string; age: number };

const funky = (a: stringOrNumb, b: userDetails) => {};

let add: (a: number, b: number) => number;

add = (c, d) => {
  return c + d;
};

add(5, 8);

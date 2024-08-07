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

class Player {
  private name: string;
  readonly country: string;
  private number: number;

  constructor(n: string, c: string, nmb: number) {
    this.name = n;
    this.country = c;
    this.number = nmb;
  }

  play() {
    console.log(`${this.name} from ${this.country}. Jersey no. ${this.number}`);
  }
}

const arg = new Player("Messi", "Argentina", 10);
const por = new Player("Ronaldo", "Portugal", 7);

let arr: Array<Player> = [];

arr.push(arg, por);
for (let i of arr) {
  i.play();
}

import { Student } from "./class/Class.js";
const student1 = new Student(25, "Arnab Saha", "Programming Hero");
student1.output();

const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);

  return { ...obj, id };
};

let user = addID({
  name: "Arnab",
  age: 25,
  country: "Bangladesh",
});

addID(user);

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response: APIResponse<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "test",
};

let b: [number, string, object] = [5, "okay", {}];

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

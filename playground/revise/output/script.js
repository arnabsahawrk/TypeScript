const country = "I love Bangladesh";
console.log(country);
let a = [];
a.push("Arnab", 99);
console.log(a);
let c;
c = {
    name: "Arnab Saha",
    age: 25,
    adult: true,
};
console.log(c);
let d;
d = [5, 6, 7];
console.log(d);
let e = [];
e.push("Arnab", 99);
console.log(e);
let f;
f = {
    name: 25,
    age: "Arnab",
};
console.log(f);
const myFunc = () => {
    console.log("This is function type");
};
let myFunc2 = (a, b, d, c = "Hello") => {
    console.log(c, d);
    return a + b;
};
myFunc2("Arnab", "Saha");
const funky = (a, b) => { };
let add;
add = (c, d) => {
    return c + d;
};
add(5, 8);
class Player {
    constructor(n, c, nmb) {
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
let arr = [];
arr.push(arg, por);
for (let i of arr) {
    i.play();
}
import { Student } from "./class/Class.js";
const student1 = new Student(25, "Arnab Saha", "Programming Hero");
student1.output();

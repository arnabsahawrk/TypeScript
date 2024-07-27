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

// let userNames: string[];
let userNames: Array<string>;

userNames = ["Arnab", "Robin", "Joy"];

console.log(userNames[0]);

let multipleTypes: (string | number)[];
multipleTypes = [1, "name"];

console.log(multipleTypes[0]);

console.log(userNames.sort());

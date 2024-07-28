//built-in data type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 99;
firstName = "Arnab";
lastName = " Saha";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(
  `User Id: ${userId}, User Name: ${fullName}, Account Activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
  console.log("Hi I'm display");
}

display();

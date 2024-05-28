//built-in data type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 99;
firstName = "Arnab";
lastName = " Saha";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("User Id: ".concat(userId, ", User Name: ").concat(fullName, ", Account Activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi I'm display");
}
display();

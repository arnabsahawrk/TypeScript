var usersArray = [];
var userOne = {
    id: 31343,
    name: "Arnab Saha",
    age: 25,
};
var userTwo = {
    id: 2454,
    name: "Riya Saha",
    age: 24,
};
// console.log(userOne, userTwo);
usersArray.push(userOne, userTwo);
// console.log(usersArray);
var printUserInfo = function (user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Age: ").concat(user.age));
};
usersArray.forEach(function (user) { return printUserInfo(user); });

// let user1: object;  //object defined
// let user1: { userName: string; userId: number };
// user1 = { userName: "Arnab Saha", userId: 12 };
// console.log(user1);
// let user1: { userName: string; userId?: number }; //set optional key
// user1 = { userName: "Arnab Saha" };
// console.log(user1);
var users; //array of object
// users = [{ name: "Arnab Saha" }, { name: "Anonymous" }];
users = [];
var user1;
user1 = { userName: "Arnab Saha", userId: 1 };
users.push(user1);
var user2;
user2 = { userName: "Riya Saha", userId: 2 };
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(key);
    console.log(users[key]);
}

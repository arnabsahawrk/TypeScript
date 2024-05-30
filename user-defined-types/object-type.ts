// let user1: object;  //object defined

// let user1: { userName: string; userId: number };
// user1 = { userName: "Arnab Saha", userId: 12 };

// console.log(user1);

// let user1: { userName: string; userId?: number }; //set optional key
// user1 = { userName: "Arnab Saha" };

// console.log(user1);

let users: object[]; //array of object
// users = [{ name: "Arnab Saha" }, { name: "Anonymous" }];
users = [];

let user1: { userName: string; userId: number };
user1 = { userName: "Arnab Saha", userId: 1 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: "Riya Saha", userId: 2 };
users.push(user2);

// console.log(users);

for (const key in users) {
  console.log(key);
  console.log(users[key]);
}

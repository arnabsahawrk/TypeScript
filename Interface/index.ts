interface IUser {
  id: number;
  name: string;
  age: number;
}

let usersArray: IUser[] = [];

let userOne: IUser = {
  id: 31343,
  name: "Arnab Saha",
  age: 25,
};

let userTwo: IUser = {
  id: 2454,
  name: "Riya Saha",
  age: 24,
};

// console.log(userOne, userTwo);

usersArray.push(userOne, userTwo);

// console.log(usersArray);

const printUserInfo = (user: IUser) => {
  console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
};

usersArray.forEach((user) => printUserInfo(user));

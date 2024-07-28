// let usersCollection: object[];
// usersCollection = [];

type User = { userName: string; userId: number };

let usersCollection: User[];
usersCollection = [];

let firstUser: User;
firstUser = { userName: "Arnab Saha", userId: 1 };
usersCollection.push(firstUser);

let secondUser: User;
secondUser = { userName: "Riya Saha", userId: 2 };
usersCollection.push(secondUser);

// console.log(usersCollection);

type CustomRequestType = "GET" | "POST";
let getRequest: CustomRequestType;
getRequest = "GET";

type CustomNumber = 2 | 5;
let myNumber: CustomNumber;
myNumber = 5;

function requestHandler(requestType: CustomRequestType) {
  console.log(requestType);
}

requestHandler("POST");

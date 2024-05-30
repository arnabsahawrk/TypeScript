// let usersCollection: object[];
// usersCollection = [];
var usersCollection;
usersCollection = [];
var firstUser;
firstUser = { userName: "Arnab Saha", userId: 1 };
usersCollection.push(firstUser);
var secondUser;
secondUser = { userName: "Riya Saha", userId: 2 };
usersCollection.push(secondUser);
var getRequest;
getRequest = "GET";
var myNumber;
myNumber = 5;
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");

function printUserInfos<X, Y>(userId: X, userAge: Y) {
  console.log(`User Id: ${userId} and User Age ${userAge}`);
}

printUserInfos("101", 101);
printUserInfos(101, "101");

const consoleUserInfo = <X, Y>(userId: X, userAge: Y) => {
  console.log(`User Id: ${userId} and User Age ${userAge}`);
};

consoleUserInfo("101", 101);
consoleUserInfo(101, "101");

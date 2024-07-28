function printUserInfos(userId, userAge) {
    console.log("User Id: ".concat(userId, " and User Age ").concat(userAge));
}
printUserInfos("101", 101);
printUserInfos(101, "101");
var consoleUserInfo = function (userId, userAge) {
    console.log("User Id: ".concat(userId, " and User Age ").concat(userAge));
};
consoleUserInfo("101", 101);
consoleUserInfo(101, "101");

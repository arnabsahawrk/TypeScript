var UserClass = /** @class */ (function () {
    function UserClass(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    UserClass.prototype.display = function () {
        console.log("name: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return UserClass;
}());
//class object
//myUser - name: Arnab Saha, age: 25
var myUser = new UserClass("Arnab Saha", 25);
myUser.display();

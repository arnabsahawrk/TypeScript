let userInfo: string | number | boolean;

userInfo = "Found";
console.log(userInfo);
userInfo = 101;
console.log(userInfo);
userInfo = true;
console.log(userInfo);

const displayUserInfo = (userId: string | number) => {
  console.log(userId);
};

displayUserInfo("101");
displayUserInfo(101);

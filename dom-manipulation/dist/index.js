"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = userName.value;
    console.log(data);
});

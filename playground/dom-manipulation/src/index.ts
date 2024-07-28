const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const data = userName.value;

  console.log(data);
});

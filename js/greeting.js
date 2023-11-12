const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const savedUsername = localStorage.getItem(USERNAME_KEY);

const handleLoginSubmit = (e) => {
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);

  paintGreetings();
};

const paintGreetings = () => {
  const username = localStorage.getItem(USERNAME_KEY);

  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings();
}

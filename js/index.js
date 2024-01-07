function lightTheme() {
  let bodyElement = document.querySelector("body");
  bodyElement.classList.add("light");
  bodyElement.classList.remove("dark");
  let buttonElement = document.querySelector("#themeButton");
  buttonElement.innerHTML = `<button id="dark">Dark Theme</button>`;

  let darkButton = document.querySelector("#dark");
  darkButton.addEventListener("click", darkTheme);
}
function darkTheme() {
  let bodyElement = document.querySelector("body");
  bodyElement.classList.add("dark");
  bodyElement.classList.remove("light");
  let buttonElement = document.querySelector("#themeButton");
  buttonElement.innerHTML = `<button id="light">Light Theme</button>`;

  let lightButton = document.querySelector("#light");
  lightButton.addEventListener("click", lightTheme);
}

let darkButton = document.querySelector("#dark");
darkButton.addEventListener("click", darkTheme);

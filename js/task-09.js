function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button");
const span = document.querySelector("span");

const changeColor = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
};

btn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelectorAll("button");
const input = document.querySelector("input");
const boxHolder = document.querySelector("#boxes");
boxHolder.classList.add("boxHolder");
let amount = 0;

const createBoxes = (amount) => {
  amount = input.value;
  if (!boxHolder.hasChildNodes()) {
    for (let i = 1; i <= amount; i++) {
      let width = 20;
      let heigth = 20;
      const box = document.createElement("div");
      boxHolder.appendChild(box);
      box.classList.add("box");
      box.style.width = `${width + 10 * i}px `;
      box.style.height = `${heigth + 10 * i}px `;
      box.style.backgroundColor = getRandomHexColor();
    }
  } else if (boxHolder.hasChildNodes()) {
    for (let i = 1; i <= amount; i++) {
      let width = 20;
      let heigth = 20;
      const box = document.createElement("div");
      boxHolder.appendChild(box);
      box.classList.add("box");
      box.style.width = `${width + 10 * boxHolder.childElementCount + 1}px `;
      box.style.height = `${heigth + 10 * boxHolder.childElementCount + 1}px `;
      box.style.backgroundColor = getRandomHexColor();
    }
  }
};

const destroyBoxes = () => {
  while (boxHolder.firstChild) {
    boxHolder.firstChild.remove();
  }
};

btn[0].addEventListener("click", createBoxes);
btn[1].addEventListener("click", destroyBoxes);

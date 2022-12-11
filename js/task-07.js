const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

const changeSize = (e) => {
  text.style.fontSize = `${e.target.value / 2}px`;
};

input.addEventListener("input", changeSize);
console.log(input.value);

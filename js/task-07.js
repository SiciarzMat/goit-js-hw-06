const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.value = 16;
const changeSize = (e) => {
  text.style.fontSize = `${e.target.value}px`;
};

input.addEventListener("input", changeSize);

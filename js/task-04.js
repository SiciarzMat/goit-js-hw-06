let counterValue = 0;
const value = document.getElementById("value");
const btn = document.querySelectorAll("button");

const addValue = () => {
  counterValue++;
  value.textContent = counterValue;
};

const substractValue = () => {
  counterValue--;
  value.textContent = counterValue;
};

btn[0].addEventListener("click", substractValue);
btn[1].addEventListener("click", addValue);

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const submitName = (e) => {
  output.textContent = e.target.value;
  if (e.target.value === "") {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", submitName);

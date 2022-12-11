const input = document.getElementById("validation-input");

const checkValidity = (e) => {
  if (e.target.value.length === Number(e.target.attributes[2].value)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", checkValidity);

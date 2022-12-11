const form = document.querySelector("form");

console.log(form);

const formSubmit = (e) => {
  e.preventDefault();
  if (e.target[0].value === "" || e.target[1].value === "") {
    alert("PLease fill all the fields!");
  }
  const {
    elements: { email, password },
  } = e.currentTarget;
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  e.currentTarget.reset();
};

form.addEventListener("submit", formSubmit);

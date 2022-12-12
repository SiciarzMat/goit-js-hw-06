const form = document.querySelector("form");

const formSubmit = (e) => {
  e.preventDefault();
  if (e.target[0].value !== "" && e.target[1].value !== "") {
    const {
      elements: { email, password },
    } = e.currentTarget;
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    e.currentTarget.reset();
  } else if (e.target[0].value === "" || e.target[1].value === "") {
    alert("Please fill all the fields!");
  }
};

form.addEventListener("submit", formSubmit);

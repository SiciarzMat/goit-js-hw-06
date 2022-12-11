const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((el) => {
  return console.log(
    `Category: ${el.querySelector("h2").textContent}\nElements: ${
      el.querySelector("ul").childElementCount
    }`
  );
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = el;
  listItem.classList.add("item");
  container.append(listItem);
});

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const containerListRef = document.querySelector("#ingredients");
//console.log(containerListRef);
const ingredientsArr = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  //  console.log(listItem);
  if ((listItem.textContent = ingredient)) {
    containerListRef.appendChild(listItem);
  }
});

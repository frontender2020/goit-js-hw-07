const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const containerListRef = document.querySelector("#ingredients");
// console.log(containerListRef);

const arrayWithItems = [];

const getList = array =>
  array.map(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    arrayWithItems.push(listItem);
  });

getList(ingredients);

containerListRef.append(...arrayWithItems);

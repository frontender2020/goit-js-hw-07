const categories = document.querySelector("#categories");
//console.log(categories);
const items = document.querySelectorAll(".item");
//console.log(items);
const title = document.querySelectorAll("h2");
//console.log(title);
const listInList = document.querySelectorAll(".item ul");
//console.log(listInList);
const getCountItems = array => array.length;

const getTitle = heading => heading.textContent;
const getCategoriesInfo = array =>
  array.forEach((element, index) => {
    console.log(`Категория: ${getTitle(title[index])}`);
    console.log(
      `Количество элементов: ${getCountItems(listInList[index].children)}`
    );
  });
console.log(`В списке ${getCountItems(categories.children)} категории`);
getCategoriesInfo(items);

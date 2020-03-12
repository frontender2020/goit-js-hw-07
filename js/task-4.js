const value = document.querySelector('span[id="value"]');
//console.log(value);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
//console.log(incrementButton);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
//console.log(decrementButton)
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

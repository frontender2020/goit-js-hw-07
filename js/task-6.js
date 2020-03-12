//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const validationValue = document.querySelector('input[id="validation-input"]');
//console.log(validationValue);
const dataLength = validationValue.getAttribute("data-length");
//console.log(dataLength); // 6 
const validation = () => {
  const inputText = validationValue.value.trim();
  if (inputText.length < dataLength) {
    validationValue.classList.add("invalid");
    validationValue.classList.remove("valid");
    return;
  }
  if (inputText.length >= dataLength) {
    validationValue.classList.add("valid");
    validationValue.classList.remove("invalid");
    return;
  }
};
validationValue.addEventListener("change", validation);

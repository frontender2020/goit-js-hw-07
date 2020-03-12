//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('input[id="name-input"]');
//console.log(inputRef);
const outputRef = document.querySelector('span[id="name-output"]');
//console.log(outputRef);
inputRef.oninput = function() {
  outputRef.innerHTML = inputRef.value;
  if (inputRef.value === '') {
    outputRef.innerHTML = 'незнакомец';
  }
};

//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRangeRef = document.querySelector('input[id="font-size-control"]');
//console.log(inputRangeRef);
const textRef = document.querySelector('span[id="text"]');
//console.log(textRef)
const fontSizeControlFoo = () => {
  textRef.style.fontSize = `${inputRangeRef.value}px`;
};
inputRangeRef.addEventListener("input", fontSizeControlFoo);

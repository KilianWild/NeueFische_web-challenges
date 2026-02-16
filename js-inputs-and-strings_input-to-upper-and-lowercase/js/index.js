console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
   let string = input.value.toUpperCase();
   if (string !== input.value) input.value = string;
   else input.value = input.value.toLowerCase();
});

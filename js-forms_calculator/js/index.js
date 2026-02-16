console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
   return Number(a) + Number(b);
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   return a / b;
}

form.addEventListener("submit", (event) => {
   event.preventDefault();

   let result;
   let a = event.target.elements.numberA.value;
   let b = event.target.elements.numberA.value;

   // --v-- write your code here --v--
   switch (event.target.elements.operator.value) {
      case "addition":
         result = add(a, b);
         break;
      case "subtraction":
         result = subtract(a, b);
         break;
      case "multiplication":
         result = multiply(a, b);
         break;
      case "division":
         result = divide(a, b);
         break;
   }

   // --^-- write your code here --^--

   resultOutput.textContent = result;
});

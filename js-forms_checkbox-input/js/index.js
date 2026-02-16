console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessages = document.querySelector('[data-js="success"]');

function hideTosError() {
   tosError.setAttribute("hidden", "");
}

function showTosError() {
   tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", () => {
   if (tosCheckbox.checked) hideTosError();
   else showTosError();
});

//to force the checkbox to "unchecked"

/* window.addEventListener("DOMContentLoaded", () => {


   tosCheckbox.checked = false;
}); */

form.addEventListener("submit", (event) => {
   event.preventDefault();

   // --v-- write your code here --v--
   if (!tosCheckbox.checked) {
      successMessages.setAttribute("hidden", "");
      return;
   }
   // --^-- write your code here --^--

   // eslint-disable-next-line no-alert
   alert("Form submitted");
   successMessages.removeAttribute("hidden");
});

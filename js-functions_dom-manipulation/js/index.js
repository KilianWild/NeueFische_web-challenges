const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add functionality to the buttons on this page. When a button is clicked, the corresponding color should be applied to the box.
  1. Create a function `removeAllColors` that removes all color classes from the box.
  2. Create a function `addColor` that takes a class name as a parameter and adds that class to the box.
  3. Use the two functions in the event listeners for the buttons to apply the corresponding color to the box when a button is clicked.
*/

redButton.addEventListener("click", () => {
   redButton.classList.remove(...redButton.classList);
   redButton.classList.add("red");

   /*
  Use your functions to:
    - remove all classes
    - then add the class name: "red"
  */
});

blueButton.addEventListener("click", () => {
   blueButton.classList.remove(...blueButton.classList);
   blueButton.classList.add("blue");
   /*
  Use your functions to:
    - remove all classes
    - then add the class name: "blue"
  */
});

greenButton.addEventListener("click", () => {
   greenButton.classList.remove(...greenButton.classList);
   greenButton.classList.add("green");
   /*
  Use your functions to:
    - remove all classes
    - then add the class name: "green"
  */
});

grayButton.addEventListener("click", () => {
   grayButton.classList.remove(...grayButton.classList);
   grayButton.classList.add("gray");
   /*
  Use your functions to:
    - remove all classes
    - then add the class name: "gray"
  */
});

// Write your two functions below:

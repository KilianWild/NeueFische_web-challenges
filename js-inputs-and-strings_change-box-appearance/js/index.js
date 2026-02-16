console.clear();

const colorRange = document.querySelector('[data-js="input-color"]');
const borderRadius = document.querySelector('[data-js="input-color"]');
const rotation = document.querySelector('[data-js="input-color"]');
const box = document.querySelector('[data-js="box"]');

colorRange.addEventListener("input", () => {
   box.style.color = `hsl(2,${colorRange},50%)`;
   box.style.color = `hsl(2,${colorRange},50%)`;
});

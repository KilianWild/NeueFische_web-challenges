console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
   let scrollYPercentage =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;
   progressBar.style.width = scrollYPercentage + "%";

   console.log("width : " + scrollYPercentage);
}

document.addEventListener("scroll", calculateScrollPercentage);

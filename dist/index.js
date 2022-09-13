const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

window.onscroll = () => {
  const arowtop = document.querySelector("#arrowTop");
  const navbar = document.querySelector("#navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("navscroll");
    arowtop.classList.remove("hidden");
  } else {
    navbar.classList.remove("navscroll");
    arowtop.classList.add("hidden");
  }
};

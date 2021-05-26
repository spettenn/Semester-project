const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

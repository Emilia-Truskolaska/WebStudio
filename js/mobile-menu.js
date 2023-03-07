const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".toggle-menu");
const openMenuBtn = document.querySelector(".menu__icon");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
  disableScroll();
});
closeMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
  enableScroll();
});

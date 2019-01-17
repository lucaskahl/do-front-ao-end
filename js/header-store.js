const $menuMobile = document.querySelector(".menu-mobile");
const $menu = $menuMobile.querySelector("#menu");

$menuMobile.addEventListener("click", () => {
  $menu.classList.toggle("-active");
});

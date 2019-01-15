const $search = document.querySelector("[type='search']");
const $searchIcon = document.querySelector(".search-icon");
const $xIcon = document.querySelector(".x-icon");

$searchIcon.addEventListener("click", () => {
  $searchIcon.classList.toggle("-active");
  $search.classList.toggle("-active");
  $xIcon.classList.toggle("-active");
});

$xIcon.addEventListener("click", () => {
  $searchIcon.classList.toggle("-active");
  $search.classList.toggle("-active");
  $xIcon.classList.toggle("-active");
});

const $search = document.querySelector("[type='search']");
const $searchIcon = document.querySelector(".search-icon");

$searchIcon.addEventListener("click", () => {
  $searchIcon.classList.toggle("-active");
  $search.classList.toggle("-active");
});

$search.addEventListener("click", () => {
  $searchIcon.classList.toggle("-active");
  $search.classList.toggle("-active");
});

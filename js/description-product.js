const $heart = document.querySelector(".-heart");
const $secondButton = document.querySelector(".button-store.-second");

$heart.addEventListener("click", handleClick);

$secondButton.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}

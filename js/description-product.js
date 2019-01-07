const $heart = document.querySelector(".-heart");
const $secondButton = document.querySelector(".button-store.-second");

console.log($secondButton);

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("clicado");
}

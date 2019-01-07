const $heart = document.querySelector(".-heart");
const $secondButton = document.querySelector(".button-store.-second");
const $cartQuantity = document.querySelector(".quantity");

//$heart.addEventListener("click", handleClick);
$secondButton.addEventListener("click", handleClick);

function handleClick() {
  $cartQuantity.textContent = "ae";
}

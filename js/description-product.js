const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$stars.forEach(($star, key, parent) => {
  switch (key) {
    case 0:
      $star.addEventListener("click", zeroStar);
      break;
    case 1:
      $star.addEventListener("click", firstStar);
      break;
    case 2:
      $star.addEventListener("click", secondStar);
      break;
    case 3:
      $star.addEventListener("click", thirdStar);
      break;
    case 4:
      $star.addEventListener("click", fourthStar);
      break;
  }
});

function handleClick() {
  this.classList.toggle("-active");
}

function zeroStar() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars[0].classList.toggle("-active");
  $stars[1].classList.toggle("-active");
}

function secondStar() {
  $stars[0].classList.toggle("-active");
  $stars[1].classList.toggle("-active");
  $stars[2].classList.toggle("-active");
}

function thirdStar() {
  $stars[0].classList.toggle("-active");
  $stars[1].classList.toggle("-active");
  $stars[2].classList.toggle("-active");
  $stars[3].classList.toggle("-active");
}

function fourthStar() {
  $stars[0].classList.toggle("-active");
  $stars[1].classList.toggle("-active");
  $stars[2].classList.toggle("-active");
  $stars[3].classList.toggle("-active");
  $stars[4].classList.toggle("-active");
}

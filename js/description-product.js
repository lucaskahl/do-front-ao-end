const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".-stars");

$heart.addEventListener("click", handleClick);

$stars.forEach((value, index) => {
  console.log(index);
});

function handleClick() {
  // if (this.src == "file:///E:/Projetos/lojafone/img/star.png") {
  //   this.src = "file:///E:/Projetos/lojafone/img/star-active.png";
  // } else {
  //   this.src = "file:///E:/Projetos/lojafone/img/star.png";
  // }

  $heart.classList.toggle("-active");
}

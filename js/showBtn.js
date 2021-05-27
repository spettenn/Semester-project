console.log("potato");
const button = document.querySelector("#buttonShow");
console.log(button);
document.getElementById("buttonShow").onclick = function() {buttonClick()};
function buttonClick() {
  console.log("potatoTwo");
  const cards = document.getElementsByClassName(".card");
  console.log(cards);
}

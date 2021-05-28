const button = document.querySelector("#buttonShow");
console.log(button);
document.getElementById("buttonShow").onclick = () => {
  buttonClick();
};
function onClick(e) {
  console.log("potatoTwo");
  const cards = document.getElementsByClassName(".card");
  console.log(cards);

  Array.from(cards).forEach((element, index) => {
    if (index > 6) {
      element.style = "display: flex;";
    } else {
      element.style = "display: none;";
    }
  });
}

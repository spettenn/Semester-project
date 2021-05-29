const button = document.getElementById("#buttonShow");
console.log(button);

function buttonClick(btn) {
  const isEnabled = btn.classList.contains("enabled");
  if (isEnabled) {
    btn.classList.remove("enabled");
    btn.innerHTML = "Show More";
  } else {
    btn.classList.add("enabled");
    btn.innerHTML = "Show Less";
  }
  showCards(!isEnabled);
}
function showCards(showAll) {
  const cards = document.getElementsByClassName("card");
  console.log(cards);

  Array.from(cards).forEach((element, index) => {
    if (!showAll && index > 5) {
      element.style = "display: none;";
    } else {
      element.style = "display: flex;";
    }
  });
}

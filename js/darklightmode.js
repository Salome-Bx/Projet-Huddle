let checkboxValue = "on";
let checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", checkValue);
let translated = document.querySelector(".translated");
let bgColor = document.querySelector(".bgColor");

function checkValue() {
  if (checkboxValue === "on") {
    translated.innerText = "Je suis en français";
    checkboxValue = "off";
    bgColor.id = "lightMode";
  } else {
    translated.innerText = "And also in english";
    checkboxValue = "on";
    bgColor.id = "darkMode";
  }
}

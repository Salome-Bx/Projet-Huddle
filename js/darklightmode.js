let checkboxValue = "on";
let checkbox = document.querySelector("#checkbox");
let body = document.body;
checkbox.addEventListener("click", checkValue);
let header = document.querySelector(".header");
let titles = document.querySelectorAll("h1, h2, p");
let blocs = document.querySelectorAll(".bloc, .blocReverse, .blocButton");
let shadow = document.querySelectorAll(".boutonRose, .boutonTry");
let logo = document.querySelector(".logoHeader");

function checkValue() {
  const container = document.body;
  const dataTheme = container.getAttribute("data-theme");
  let theme = localStorage.getItem("data-theme");
  if (checkboxValue === "off") {
    checkboxValue = "on";
    container.setAttribute("data-theme", "light");
    body.classList.remove("dark");
    header.classList.remove("darkHeader");
    titles.forEach((element) => {
      element.classList.remove("darkH");
    });
    blocs.forEach((element) => {
      element.classList.remove("darkBloc");
    });
    shadow.forEach((element) => {
      element.classList.remove("darkButton");
    });
    logo.classList.remove("darkLogo");
    localStorage.toggled("data-theme", "light");
  } else {
    checkboxValue = "off";
    container.setAttribute("data-theme", "dark");
    body.classList.add("dark");
    header.classList.add("darkHeader");
    titles.forEach((element) => {
      element.classList.add("darkH");
    });
    blocs.forEach((element) => {
      element.classList.add("darkBloc");
    });
    shadow.forEach((element) => {
      element.classList.add("darkButton");
    });
    logo.classList.add("darkLogo");
    localStorage.setItem("data-theme", "dark");
  }
}

// function changerLangue() {
//   var selectElement = document.getElementById("langSelector");
//   var langueSelectionnee = selectElement.value;

//   // Masquer tous les éléments de texte
//   var textes = document.getElementsByClassName("texte");
//   for (var i = 0; i < textes.length; i++) {
//     textes[i].style.display = "none";
//   }

//   // Afficher uniquement le texte correspondant à la langue sélectionnée
//   var texteLangue = document.getElementsByClassName(langueSelectionnee);
//   for (var i = 0; i < texteLangue.length; i++) {
//     texteLangue[i].style.display = "block";
//   }
// }

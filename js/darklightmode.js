let checkboxValue = "on";
let checkbox = document.querySelector("#checkbox");
let body = document.body;
checkbox.addEventListener("click", checkValue);
let header = document.querySelector(".header");
let titles = document.querySelectorAll("h1, h2, p");
let blocs = document.querySelectorAll(".bloc, .blocReverse, .blocButton");
let shadow = document.querySelectorAll(".boutonRose, .boutonTry");
let logo = document.querySelector(".logoHeader");

let darkMode = window.localStorage.getItem("darkMode");

if (darkMode === "On") {
  // dark mode on  classList.('darkMode')
  checkboxValue = "off";
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
  window.localStorage.setItem("darkMode", "On");
} else {
  // white mode on  classList.('darkMode')
  checkboxValue = "on";
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
  window.localStorage.setItem("darkMode", "Off");
}

function checkValue() {
  if (checkboxValue === "off") {
    checkboxValue = "on";
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
    window.localStorage.setItem("darkMode", "Off");
  } else {
    checkboxValue = "off";
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
    window.localStorage.setItem("darkMode", "On");
  }
}
window.localStorage.getItem("darkMode");

function changerLangue() {
  var selectElement = document.getElementById("langSelector");
  var langueSelectionnee = selectElement.value;
// function changerLangue() {
//   var selectElement = document.getElementById("langSelector");
//   var langueSelectionnee = selectElement.value;

  // Masquer tous les éléments de texte
  var textes = document.getElementsByClassName("texte");
  for (var i = 0; i < textes.length; i++) {
    textes[i].style.display = "none";
  }
//   // Masquer tous les éléments de texte
//   var textes = document.getElementsByClassName("texte");
//   for (var i = 0; i < textes.length; i++) {
//     textes[i].style.display = "none";
//   }

  // Afficher uniquement le texte correspondant à la langue sélectionnée
  var texteLangue = document.getElementsByClassName(langueSelectionnee);
  for (var i = 0; i < texteLangue.length; i++) {
    texteLangue[i].style.display = "block";
  }
}
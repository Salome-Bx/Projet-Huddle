let shinyEvent = document.querySelector("#bouton1");
shinyEvent.addEventListener("click", shinyEvent);
let shinyText = document.querySelectorAll("h1, h2, p, a, li");
let shinyButton = document.querySelectorAll(".boutonTry, .boutonRose");
let shinyHeader = document.querySelector(".header");
let shinyLogo = document.querySelectorAll(".logoHeader");
let shinyHeaderImg = document.querySelector(".imgHeader");
let shinyBody = document.querySelector("body");
let shinyBloc = document.querySelectorAll(".bloc, .blocReverse, .blocButton");
let shinyFooter = document.querySelector("footer");
let shinyIcons = document.querySelectorAll(
  ".imgFacebook, .imgTwitter, .imgInstagram"
);
let myAudio = document.createElement("audio");
myAudio.src = "./images/Mon Petit Poney.mp3";

function shinyMode() {
  if (shinyEvent.classList.contains("shinyMode")) {
    shinyEvent.classList.remove("shinyMode");
    shinyText.forEach((element) => {
      element.classList.remove("shinyTitles");
    });
    shinyButton.forEach((element) => {
      element.classList.remove("shinyMode");
    });
    shinyHeader.classList.remove("shinyHeaderBg");
    document.getElementById("logoHeader").src = "./images/logo.svg";
    document.getElementById("logoHuddleFooter").src = "./images/logo.svg";
    shinyLogo.forEach((element) => {
      element.classList.remove("shinyLogo");
    });
    document.getElementById("imgHeader").src =
      "./images/illustration_mockups.svg";
    shinyHeaderImg.classList.remove("shinyHeaderImg");
    shinyBody.classList.remove("shinyBody");
    document.getElementById("img1").src =
      "./images/illustration_grow_together.svg";
    document.getElementById("img2").src =
      "./images/illustration_flowing_conversation.svg";
    document.getElementById("img3").src =
      "./images/illustration_your_users.svg";
    shinyBloc.forEach((element) => {
      element.classList.remove("shinyBloc");
    });
    shinyFooter.classList.remove("shinyFooter");
    document.getElementById("imgFacebook").src = "./images/facebook.svg";
    document.getElementById("imgTwitter").src = "./images/twitter.svg";
    document.getElementById("imgInstagram").src = "./images/Instagram.svg";
    shinyIcons.forEach((element) => {
      element.classList.remove("shinyIcons");
    });
    myAudio.pause();
    document.getElementById("favicon").href = "./images/Yolo-entertainment.png";
  } else {
    shinyEvent.classList.add("shinyMode");
    shinyText.forEach((element) => {
      element.classList.add("shinyTitles");
    });
    shinyButton.forEach((element) => {
      element.classList.add("shinyMode");
    });
    shinyHeader.classList.add("shinyHeaderBg");
    document.getElementById("logoHeader").src = "./images/dasding-einhorn.gif";
    document.getElementById("logoHuddleFooter").src =
      "./images/dasding-einhorn.gif";
    shinyLogo.forEach((element) => {
      element.classList.add("shinyLogo");
    });
    document.getElementById("imgHeader").src = "images/quid-quidika.gif";
    shinyHeaderImg.classList.add("shinyHeaderImg");
    shinyBody.classList.add("shinyBody");
    document.getElementById("img1").src =
      "./images/dancing-unicorn-unicorn.gif";
    document.getElementById("img2").src = "./images/magestic-unicorn.gif";
    document.getElementById("img3").src =
      "./images/squatty-potty-unicorn-unicorn-poop.gif";
    shinyBloc.forEach((element) => {
      element.classList.add("shinyBloc");
    });
    shinyFooter.classList.add("shinyFooter");
    document.getElementById("imgFacebook").src = "./images/4313394.png";
    document.getElementById("imgTwitter").src =
      "./images/icon_r82IEB0YzWJ0h-U_NjiAdlQFwIUs4BjK5sYkt7vww68=.png";
    document.getElementById("imgInstagram").src = "./images/3468136.png";
    shinyIcons.forEach((element) => {
      element.classList.add("shinyIcons");
    });
    myAudio.play();
    document.getElementById("favicon").href = "./images/4313394.png";
  }
}

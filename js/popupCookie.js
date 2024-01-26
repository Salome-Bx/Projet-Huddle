// Cookie bouton nop
let boutonCookieNop = document.querySelector(".boutonCookie2");
boutonCookieNop.addEventListener("click", obligerCookie);
function obligerCookie() {
  let boutonCookiePlease = (boutonCookieNop.innerText = "Please ?");
}

// boutonCookiePlease.addEventListener("click", gifCookie);
// if boutonCookiePlease = (boutonCookieNop.innerText = "Please ?") {
// function gifCookie() {
//   boutonCookiePlease.innerText = "OKAY";
// }
// }

// let nombreClics = 0;

// function comptage() {
//   nombreClics++;
//   document.getElementById("nombreClics").textContent = nombreClics;
// }

// document.getElementById("boutonClic").addEventListener("click", comptage);

// Cookie bouton accepter
let cookieContainer = document.querySelector(".cookieContainer");
let boutonCookie = document.querySelector(".boutonCookie");
boutonCookie.addEventListener("click", fermerCookie);
function fermerCookie() {
  cookieContainer.classList.add("hidden");
}

//cookie mouvement horizontal
let animation = gsap.timeline({ defaults: { duration: 0.75 } });
animation.fromTo(".cookieContainer", { scale: 0 }, { scale: 1 });
animation.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);

//cookie mouvement vertical
animation.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-10deg", yoyo: true, repeat: 3 }
);

animation.fromTo(
  ".miettes",
  { y: 0, rotation: "0deg" },
  { y: -20, yoyo: true, repeat: 3 },
  "<"
);

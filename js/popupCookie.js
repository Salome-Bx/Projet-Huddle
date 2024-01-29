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

// Cookie boutons nop et please
let boutonCookieNop = document.querySelector(".boutonCookie2");
let boutonCookiePlease = document.querySelector(".boutonCookiePlease");
let boutonCookieGif = document.querySelector(".boutonCookieGif");
let divGif = document.querySelector(".gif");
let cookie = document.querySelector(".cookie");

boutonCookieNop.addEventListener("click", obligerCookie);

function obligerCookie() {
  boutonCookiePlease.classList.remove("hidden");
  boutonCookieNop.classList.add("hidden");
  boutonCookiePlease.innerText = "Please ?";
}

boutonCookiePlease.addEventListener("click", ApparitionGif);

function ApparitionGif() {
  divGif.classList.remove("hidden");
  cookie.classList.add("hidden");
  boutonCookiePlease.classList.add("hidden");
  divGif.innerHTML = `<img class="gifComeOn" src="./images/come-on.gif" />`;
}

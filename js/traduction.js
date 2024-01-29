let chargementLangue = window.localStorage.getItem("chargementLangue");

const traductions = {
  langues: {
    EN: {
      titreH1: "Build The Community<br>Your Fans Will Love",
      texteIntro:
        "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your ursers as you engage in genuine discussion.",
      boutonRose: "Get Started For Free",
      boutonTry: "Try It Free",
      H2PremierBloc: "Grow Together",
      textePremierBloc:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      H2DeuxiemeBloc: "Flowing Conversations",
      texteDeuxiemeBloc:
        " You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      H2TroisiemeBloc: "Your Users",
      texteTroisiemeBloc:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      h2Button: "Ready To Build Your Community?",
      element1: "About Us",
      element2: "What We Do",
      element3: "FAQ",
      element4: "Career",
      element5: "Blog",
      element6: "Contact Us",
      copyright: "© Copyright 2018 Huddle. All rights reserved.",
      titreCookie: "Cookie Policy",
      texteCookie:
        "We use analytical cookies to make your epxerience on this website better.",
      boutonCookie: "I got it",
    },
    FR: {
      titreH1: "Construisez la communauté<br>Vos fans vont adorer",
      texteIntro:
        "Huddle réinvente la façon dont nous construisons des communautés. Vous avez une voix, mais votre public aussi. Créez des liens avec vos utilisateurs tout en vous engageant dans une véritable discussion.",
      boutonRose: "Commencez gratuitement",
      boutonTry: "Essayez-le gratuitement",
      H2PremierBloc: "Grandir Ensemble",
      textePremierBloc:
        "Générez des discussions significatives avec votre public et construisez une communauté forte et fidèle. Pensez aux conversations perspicaces que vous manquez avec un formulaire de commentaires.",
      H2DeuxiemeBloc: "Conversations fluides",
      texteDeuxiemeBloc:
        "Vous ne pagineriez pas une conversation dans la vraie vie, alors pourquoi le faire en ligne ? Nos fils de discussion sont chargés juste à temps pour un rendu plus fluide.",
      H2TroisiemeBloc: "Vos utilisateurs",
      texteTroisiemeBloc:
        "L'intégration de Huddle à la solution d'authentification de votre application ne prend aucun temps. Cela signifie qu'une fois connectés à votre application, vos utilisateurs peuvent commencer à discuter immédiatement.",
      h2Button: "Prêt à bâtir votre communauté ?",
      element1: "A propos",
      element2: "Nos activités",
      element3: "FAQ",
      element4: "Recrutement",
      element5: "Blog",
      element6: "Contactez-nous",
      copyright: "© Copyright 2018 Huddle. Tous droits réservés.",
      titreCookie: "Ce site utilise des cookies",
      texteCookie:
        "Nous utilisons des cookies analytiques pour améliorer votre expérience sur ce site Web.",
      boutonCookie: "J'ai compris",
    },
  },
};

let liste = document.querySelector("#langueSwitch");
liste.addEventListener("click", traduction);

let titreH1 = document.querySelector(".titreH1");
let texteIntro = document.querySelector(".texteIntro");
let boutonRose = document.querySelectorAll(".boutonRose")[0];
let boutonTry = document.querySelector(".boutonTry");
let H2PremierBloc = document.querySelector(".H2PremierBloc");
let textePremierBloc = document.querySelector(".textePremierBloc");
let H2DeuxiemeBloc = document.querySelector(".H2DeuxiemeBloc");
let texteDeuxiemeBloc = document.querySelector(".texteDeuxiemeBloc");
let H2TroisiemeBloc = document.querySelector(".H2TroisiemeBloc");
let texteTroisiemeBloc = document.querySelector(".texteTroisiemeBloc");
let h2Button = document.querySelector(".h2Button");
let boutonRose2 = document.querySelectorAll(".boutonRose")[1];
let element1 = document.querySelector(".element1");
let element2 = document.querySelector(".element2");
let element3 = document.querySelector(".element3");
let element4 = document.querySelector(".element4");
let element5 = document.querySelector(".element5");
let element6 = document.querySelector(".element6");
let copyright = document.querySelector(".copyright");
let titreCookie = document.querySelector(".titreCookie");
let texteCookie = document.querySelector(".texteCookie");
let boutonCookie2 = document.querySelector(".boutonCookie");

let choixLangues = window.localStorage.getItem("langues");

if (choixLangues === "fr") {
  titreH1.innerHTML = traductions.langues.FR.titreH1;
  texteIntro.innerHTML = traductions.langues.FR.texteIntro;
  boutonRose.innerHTML = traductions.langues.FR.boutonRose;
  boutonTry.innerHTML = traductions.langues.FR.boutonTry;
  H2PremierBloc.innerHTML = traductions.langues.FR.H2PremierBloc;
  textePremierBloc.innerHTML = traductions.langues.FR.textePremierBloc;
  H2DeuxiemeBloc.innerHTML = traductions.langues.FR.H2DeuxiemeBloc;
  texteDeuxiemeBloc.innerHTML = traductions.langues.FR.texteDeuxiemeBloc;
  H2TroisiemeBloc.innerHTML = traductions.langues.FR.H2TroisiemeBloc;
  texteTroisiemeBloc.innerHTML = traductions.langues.FR.texteTroisiemeBloc;
  h2Button.innerHTML = traductions.langues.FR.h2Button;
  boutonRose2.innerHTML = traductions.langues.FR.boutonRose;
  element1.innerHTML = traductions.langues.FR.element1;
  element2.innerHTML = traductions.langues.FR.element2;
  element3.innerHTML = traductions.langues.FR.element3;
  element4.innerHTML = traductions.langues.FR.element4;
  element5.innerHTML = traductions.langues.FR.element5;
  element6.innerHTML = traductions.langues.FR.element6;
  copyright.innerHTML = traductions.langues.FR.copyright;
  titreCookie.innerHTML = traductions.langues.FR.titreCookie;
  texteCookie.innerHTML = traductions.langues.FR.texteCookie;
  boutonCookie2.innerHTML = traductions.langues.FR.boutonCookie;
  window.localStorage.setItem("choixLangues", "fr");
} else {
  titreH1.innerHTML = traductions.langues.EN.titreH1;
  texteIntro.innerHTML = traductions.langues.EN.texteIntro;
  boutonRose.innerHTML = traductions.langues.EN.boutonRose;
  boutonTry.innerHTML = traductions.langues.EN.boutonTry;
  H2PremierBloc.innerHTML = traductions.langues.EN.H2PremierBloc;
  textePremierBloc.innerHTML = traductions.langues.EN.textePremierBloc;
  H2DeuxiemeBloc.innerHTML = traductions.langues.EN.H2DeuxiemeBloc;
  texteDeuxiemeBloc.innerHTML = traductions.langues.EN.texteDeuxiemeBloc;
  H2TroisiemeBloc.innerHTML = traductions.langues.EN.H2TroisiemeBloc;
  texteTroisiemeBloc.innerHTML = traductions.langues.EN.texteTroisiemeBloc;
  h2Button.innerHTML = traductions.langues.EN.h2Button;
  boutonRose2.innerHTML = traductions.langues.EN.boutonRose;
  element1.innerHTML = traductions.langues.EN.element1;
  element2.innerHTML = traductions.langues.EN.element2;
  element3.innerHTML = traductions.langues.EN.element3;
  element4.innerHTML = traductions.langues.EN.element4;
  element5.innerHTML = traductions.langues.EN.element5;
  element6.innerHTML = traductions.langues.EN.element6;
  copyright.innerHTML = traductions.langues.EN.copyright;
  titreCookie.innerHTML = traductions.langues.EN.titreCookie;
  texteCookie.innerHTML = traductions.langues.EN.texteCookie;
  boutonCookie2.innerHTML = traductions.langues.EN.boutonCookie;
  window.localStorage.setItem("choixLangues", "en");
}

function traduction() {
  switch (liste.value) {
    case "en":
      titreH1.innerHTML = traductions.langues.EN.titreH1;
      texteIntro.innerHTML = traductions.langues.EN.texteIntro;
      boutonRose.innerHTML = traductions.langues.EN.boutonRose;
      boutonTry.innerHTML = traductions.langues.EN.boutonTry;
      H2PremierBloc.innerHTML = traductions.langues.EN.H2PremierBloc;
      textePremierBloc.innerHTML = traductions.langues.EN.textePremierBloc;
      H2DeuxiemeBloc.innerHTML = traductions.langues.EN.H2DeuxiemeBloc;
      texteDeuxiemeBloc.innerHTML = traductions.langues.EN.texteDeuxiemeBloc;
      H2TroisiemeBloc.innerHTML = traductions.langues.EN.H2TroisiemeBloc;
      texteTroisiemeBloc.innerHTML = traductions.langues.EN.texteTroisiemeBloc;
      h2Button.innerHTML = traductions.langues.EN.h2Button;
      boutonRose2.innerHTML = traductions.langues.EN.boutonRose;
      element1.innerHTML = traductions.langues.EN.element1;
      element2.innerHTML = traductions.langues.EN.element2;
      element3.innerHTML = traductions.langues.EN.element3;
      element4.innerHTML = traductions.langues.EN.element4;
      element5.innerHTML = traductions.langues.EN.element5;
      element6.innerHTML = traductions.langues.EN.element6;
      copyright.innerHTML = traductions.langues.EN.copyright;
      titreCookie.innerHTML = traductions.langues.EN.titreCookie;
      texteCookie.innerHTML = traductions.langues.EN.texteCookie;
      boutonCookie2.innerHTML = traductions.langues.EN.boutonCookie;

      break;

    case "fr":
      titreH1.innerHTML = traductions.langues.FR.titreH1;
      texteIntro.innerHTML = traductions.langues.FR.texteIntro;
      boutonRose.innerHTML = traductions.langues.FR.boutonRose;
      boutonTry.innerHTML = traductions.langues.FR.boutonTry;
      H2PremierBloc.innerHTML = traductions.langues.FR.H2PremierBloc;
      textePremierBloc.innerHTML = traductions.langues.FR.textePremierBloc;
      H2DeuxiemeBloc.innerHTML = traductions.langues.FR.H2DeuxiemeBloc;
      texteDeuxiemeBloc.innerHTML = traductions.langues.FR.texteDeuxiemeBloc;
      H2TroisiemeBloc.innerHTML = traductions.langues.FR.H2TroisiemeBloc;
      texteTroisiemeBloc.innerHTML = traductions.langues.FR.texteTroisiemeBloc;
      h2Button.innerHTML = traductions.langues.FR.h2Button;
      boutonRose2.innerHTML = traductions.langues.FR.boutonRose;
      element1.innerHTML = traductions.langues.FR.element1;
      element2.innerHTML = traductions.langues.FR.element2;
      element3.innerHTML = traductions.langues.FR.element3;
      element4.innerHTML = traductions.langues.FR.element4;
      element5.innerHTML = traductions.langues.FR.element5;
      element6.innerHTML = traductions.langues.FR.element6;
      copyright.innerHTML = traductions.langues.FR.copyright;
      titreCookie.innerHTML = traductions.langues.FR.titreCookie;
      texteCookie.innerHTML = traductions.langues.FR.texteCookie;
      boutonCookie2.innerHTML = traductions.langues.FR.boutonCookie;
      break;
  }
}

//chargement du choix de la traduction au clic
if (chargementLangue === "fr") {
  window.localStorage.getItem("chargementLangue", "fr");
  titreH1.innerHTML = traductions.langues.EN.titreH1;
  texteIntro.innerHTML = traductions.langues.EN.texteIntro;
  boutonRose.innerHTML = traductions.langues.EN.boutonRose;
  boutonTry.innerHTML = traductions.langues.EN.boutonTry;
  H2PremierBloc.innerHTML = traductions.langues.EN.H2PremierBloc;
  textePremierBloc.innerHTML = traductions.langues.EN.textePremierBloc;
  H2DeuxiemeBloc.innerHTML = traductions.langues.EN.H2DeuxiemeBloc;
  texteDeuxiemeBloc.innerHTML = traductions.langues.EN.texteDeuxiemeBloc;
  H2TroisiemeBloc.innerHTML = traductions.langues.EN.H2TroisiemeBloc;
  texteTroisiemeBloc.innerHTML = traductions.langues.EN.texteTroisiemeBloc;
  h2Button.innerHTML = traductions.langues.EN.h2Button;
  boutonRose2.innerHTML = traductions.langues.EN.boutonRose;
  element1.innerHTML = traductions.langues.EN.element1;
  element2.innerHTML = traductions.langues.EN.element2;
  element3.innerHTML = traductions.langues.EN.element3;
  element4.innerHTML = traductions.langues.EN.element4;
  element5.innerHTML = traductions.langues.EN.element5;
  element6.innerHTML = traductions.langues.EN.element6;
  copyright.innerHTML = traductions.langues.EN.copyright;
  titreCookie.innerHTML = traductions.langues.EN.titreCookie;
  texteCookie.innerHTML = traductions.langues.EN.texteCookie;
  boutonCookie2.innerHTML = traductions.langues.EN.boutonCookie;
  window.localStorage.setItem("choixLangue", "en");
} else {
  window.localStorage.getItem("chargementLangue", "en");
  titreH1.innerHTML = traductions.langues.FR.titreH1;
  texteIntro.innerHTML = traductions.langues.FR.texteIntro;
  boutonRose.innerHTML = traductions.langues.FR.boutonRose;
  boutonTry.innerHTML = traductions.langues.FR.boutonTry;
  H2PremierBloc.innerHTML = traductions.langues.FR.H2PremierBloc;
  textePremierBloc.innerHTML = traductions.langues.FR.textePremierBloc;
  H2DeuxiemeBloc.innerHTML = traductions.langues.FR.H2DeuxiemeBloc;
  texteDeuxiemeBloc.innerHTML = traductions.langues.FR.texteDeuxiemeBloc;
  H2TroisiemeBloc.innerHTML = traductions.langues.FR.H2TroisiemeBloc;
  texteTroisiemeBloc.innerHTML = traductions.langues.FR.texteTroisiemeBloc;
  h2Button.innerHTML = traductions.langues.FR.h2Button;
  boutonRose2.innerHTML = traductions.langues.FR.boutonRose;
  element1.innerHTML = traductions.langues.FR.element1;
  element2.innerHTML = traductions.langues.FR.element2;
  element3.innerHTML = traductions.langues.FR.element3;
  element4.innerHTML = traductions.langues.FR.element4;
  element5.innerHTML = traductions.langues.FR.element5;
  element6.innerHTML = traductions.langues.FR.element6;
  copyright.innerHTML = traductions.langues.FR.copyright;
  titreCookie.innerHTML = traductions.langues.FR.titreCookie;
  texteCookie.innerHTML = traductions.langues.FR.texteCookie;
  boutonCookie2.innerHTML = traductions.langues.FR.boutonCookie;
}

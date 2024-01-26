// let checkboxValue = "on";
// let btn = document.querySelector("#checkbox");
// checkbox.addEventListener("click", checkValue);
// let translated = document.querySelector(".translated");
// let bgColor = document.querySelector(".bgColor");

// function checkValue() {
//   if (checkboxValue === "on") {
//     translated.innerText = "Je suis en français";
//     checkboxValue = "off";
//     bgColor.id = "lightMode";
//   } else {
//     translated.innerText = "And also in english";
//     checkboxValue = "on";
//     bgColor.id = "darkMode";
//   }
// }

// const btn = document.querySelector("#checkbox");
// const body = document.body;
// const header = document.querySelector(".header");

// function change() {
//   btn.checked ? body.classList.add("dark") : body.classList.remove("dark");
//   btn.checked
//     ? header.classList.add("darkHeader")
//     : header.classList.remove("darkHeader");
// }

// btn.addEventListener("change", change);

//--------AUTRE FACON DE TRADUIRE--------------------------
// let liste = document.querySelector("#langueSwitch");
// // let translated = document.querySelector(".translated");
// liste.addEventListener("click", traduction);
// let titreH1 = document.querySelector(".titreH1");
// let texteIntro = document.querySelector(".texteIntro");
// let boutonRose = document.querySelectorAll(".boutonRose")[0];
// let boutonTry = document.querySelector(".boutonTry");
// let H2PremierBloc = document.querySelector(".H2PremierBloc");
// let textePremierBloc = document.querySelector(".textePremierBloc");
// let H2DeuxiemeBloc = document.querySelector(".H2DeuxiemeBloc");
// let texteDeuxiemeBloc = document.querySelector(".texteDeuxiemeBloc");
// let H2TroisiemeBloc = document.querySelector(".H2TroisiemeBloc");
// let texteTroisiemeBloc = document.querySelector(".texteTroisiemeBloc");
// let h2Button = document.querySelector(".h2Button");
// let boutonRose2 = document.querySelectorAll(".boutonRose")[1];

// function traduction() {
//   switch (liste.value) {
//     case "en":
//       titreH1.innerHTML = "Build The Community<br>Your Fans Will Love";
//       texteIntro.innerHTML =
//         "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your ursers as you engage in genuine discussion.";
//       boutonRose.innerHTML = "Get Started For Free";
//       boutonTry.innerHTML = "Try It Free";
//       H2PremierBloc.innerHTML = "Grow Together";
//       textePremierBloc.innerHTML =
//         "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.";
//       H2DeuxiemeBloc.innerHTML = "Flowing Conversations";
//       texteDeuxiemeBloc.innerHTML =
//         " You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.";
//       H2TroisiemeBloc.innerHTML = "Your Users";
//       texteTroisiemeBloc.innerHTML =
//         "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.";
//       h2Button.innerHTML = "Ready To Build Your Community?";
//       boutonRose2.innerHTML = "Get Started For Free";
//       break;
//     case "fr":
//       titreH1.innerHTML = "Construisez la communauté<br>Vos fans vont adorer";
//       texteIntro.innerHTML =
//         "Huddle réinvente la façon dont nous construisons des communautés. Vous avez une voix, mais votre public aussi. Créez des liens avec vos utilisateurs tout en vous engageant dans une véritable discussion.";
//       boutonRose.innerHTML = "Commencez gratuitement";
//       boutonTry.innerHTML = "Essayez-le gratuitement";
//       H2PremierBloc.innerHTML = "Grandir Ensemble";
//       textePremierBloc.innerHTML =
//         "Générez des discussions significatives avec votre public et construisez une communauté forte et fidèle. Pensez aux conversations perspicaces que vous manquez avec un formulaire de commentaires.";
//       H2DeuxiemeBloc.innerHTML = "Conversations fluides";
//       texteDeuxiemeBloc.innerHTML =
//         "Vous ne pagineriez pas une conversation dans la vraie vie, alors pourquoi le faire en ligne ? Nos fils de discussion sont chargés juste à temps pour un rendu plus fluide.";
//       H2TroisiemeBloc.innerHTML = "Vos utilisateurs";
//       texteTroisiemeBloc.innerHTML =
//         "L'intégration de Huddle à la solution d'authentification de votre application ne prend aucun temps. Cela signifie qu'une fois connectés à votre application, vos utilisateurs peuvent commencer à discuter immédiatement.";
//       h2Button.innerHTML = "Prêt à bâtir votre communauté ?";
//       boutonRose2.innerHTML = "Commencez gratuitement";
//       break;
//   }
// }

// traduction();

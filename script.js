script.js

// POPUP

const popup =
document.getElementById("popup");

function showPopup(message){

popup.innerText = message;

popup.classList.add("show");

setTimeout(() => {

popup.classList.remove("show");

},2000);

}

/* ========================= */
/* MODE SOMBRE / CLAIR */
/* ========================= */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle(
"light"
);

if(
document.body.classList.contains(
"light"
)
){

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

/* ========================= */
/* POPUP BUTTONS */
/* ========================= */

const popupButtons =
document.querySelectorAll(
".popup-btn"
);

popupButtons.forEach(button => {

button.addEventListener("click", () => {

showPopup(
"Service disponible bientôt"
);

if(navigator.vibrate){

navigator.vibrate(40);

}

});

});

/* ========================= */
/* ROUE QUI TOURNE */
/* ========================= */

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

let degree = 0;

/* GAINS POSSIBLES */

const rewards = [

"0 BCC",
"5 BCC",
"10 BCC",
"40 BCC",
"80 BCC",
"100 BCC"

];

spinBtn.addEventListener("click", () => {

degree +=
3600 + Math.floor(Math.random() * 360);

wheel.style.transform =
`rotate(${degree}deg)`;

/* vibration */

if(navigator.vibrate){

navigator.vibrate([100,50,100]);

}

/* popup */

showPopup(
"🎡 La roue tourne..."
);

/* resultat */

setTimeout(() => {

const randomReward =

rewards[
Math.floor(
Math.random() *
rewards.length
)
];

showPopup(
`🎉 Bravo : ${randomReward}`
);

},5000);

});

/* ========================= */
/* NAVBAR */
/* ========================= */

const navButtons =
document.querySelectorAll(
".nav-btn"
);

navButtons.forEach(btn => {

btn.addEventListener("click", () => {

navButtons.forEach(item => {

item.classList.remove(
"active"
);

});

btn.classList.add(
"active"
);

/* vibration */

if(navigator.vibrate){

navigator.vibrate(20);

}

});

});

/* ========================= */
/* BOUTON CENTRE */
/* ========================= */

const centerBtn =
document.querySelector(
".center-btn"
);

const centerTexts = [

"Bienvenue sur Baby Cash Coin",

"Votre portefeuille numérique BCC",

"Gagnez des récompenses BCC",

"Le futur du paiement ivoirien",

"Marché crypto nouvelle génération",

"Envoyez et recevez vos BCC",

"Débloquez des coffres cadeaux",

"Tournez la roue des récompenses",

"Progressez et gagnez plus",

"Baby Cash Coin Côte d’Ivoire",

"Une expérience crypto futuriste",

"Votre argent numérique sécurisé",

"Connectez-vous chaque jour",

"Plus de missions = plus de gains",

"Échangez vos BCC facilement",

"Profitez des bonus quotidiens",

"Invitez vos amis et gagnez",

"Le wallet nouvelle génération",

"Récompenses exclusives BCC",

"Bienvenue dans l’univers BCC"

];

const ticker =
document.querySelector(
".ticker-mini"
);

let textIndex = 0;

setInterval(() => {

textIndex++;

if(
textIndex >= centerTexts.length
){

textIndex = 0;

}

ticker.innerText =
centerTexts[textIndex];

},4000);

/* ========================= */
/* NOTIFICATION */
/* ========================= */

const notifBtn =
document.querySelector(
".notif-btn"
);

notifBtn.addEventListener("click", () => {

showPopup(
"Aucune notification"
);

});

/* ========================= */
/* ACTIONS */
/* ========================= */

const actionButtons =
document.querySelectorAll(
".action-btn"
);

actionButtons.forEach(btn => {

btn.addEventListener("click", () => {

showPopup(
"Fonction bientôt disponible"
);

});

});

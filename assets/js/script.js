const burger = document.querySelector("#burger_icon")
const menuBurger = document.querySelector("#burgerMenu")
// Récupération de l'id menu
const slideImg = document.querySelector("#menu");
const btnnext = document.querySelector("#btnnext");
const btnnext2 = document.querySelector("#btnnext2");
const btnnext3 = document.querySelector("#btnnext3");
const btnprev = document.querySelector("#btnprev");
const img_car = document.querySelector("#carimg");
const img_car2 = document.querySelector("#carimg2");
const img_car3 = document.querySelector("#carimg3");

// AFFICHER LE SOUS MENU 
// AFFICHER LE SOUS MENU 

burger.addEventListener("click", () => {
    if (menuBurger.style.display === 'block') {
        menuBurger.style.display = 'none'
    } else {
        menuBurger.style.display = 'block'
    }
})


// tableau d'images du menu
let img = [
    "/assets/img/background.jpg",
    "/assets/img/background1.jpg",
    "/assets/img/background2.jpg"
];
// BOUCLE TABLEAU
let index = 0;
// Insère l'image au chargement de la page.
slideImg.style.backgroundImage = `url(${img[index]})`;
// Boucle avec changement de l'image.
const intervalID = setInterval(() => {
    slideImg.style.backgroundImage = `url(${img[index]})`;
    index = (index + 1) % img.length;
    // Interval de 5 seconde.
}, 5000);

// !!!!!!! NEXT 
// !!!!!!! NEXT 
let v1 = 0;
let vehicule1 = [
    "/assets/img/vehicule1.png",
    "/assets/img/vehicule1-2.png",
    "/assets/img/vehicule1-3.png",
    "/assets/img/vehicule1-4.png"
];
const next = () => {
    if (v1 < vehicule1.length - 1) {
        v1++;
    } else {
        v1 = 0;
    }
    img_car.src = vehicule1[v1];
}
btnnext.addEventListener("click", next)

// !!!!!!! PREV 
// !!!!!!! PREV 
const prev = () => {
    if (v1 > vehicule1.length + 1) {
        v1--;
    } else {
        v1 = 0;
    }
    img_car.src = vehicule1[v1];
}
btnprev.addEventListener("click", prev)

// NEXT 2
// NEXT 2
let v2 = 0;
let vehicule2 = [
    "/assets/img/vehicule2.png",
    "/assets/img/vehicule2-2.png",
    "/assets/img/vehicule2-3.png",
    "/assets/img/vehicule2-4.png"
];
const next2 = () => {
    if (v2 < vehicule2.length - 1) {
        v2++;
    } else {
        v2 = 0;
    }
    img_car2.src = vehicule2[v2];
}
btnnext2.addEventListener("click", next2)

let v3 = 0;
let vehicule3 = [
    "/assets/img/vehicule4.png",
    "/assets/img/vehicule4-2.png",
    "/assets/img/vehicule4-3.png",
    "/assets/img/vehicule4-4.png"
];
const next3 = () => {
    if (v3 < vehicule2.length - 1) {
        v3++;
    } else {
        v3 = 0;
    }
    img_car3.src = vehicule3[v3];
}
btnnext3.addEventListener("click", next3)









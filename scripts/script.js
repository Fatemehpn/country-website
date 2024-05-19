"use strict";

const menuBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-menu");
const discoverTehranBtn = document.getElementById("tehran-link");
const discoverIsfahanBtn = document.getElementById("isfahan-link");
const discoverShirazBtn = document.getElementById("shiraz-link");
const tehranElem = document.getElementById("tehran");
const isfahanElem = document.getElementById("isfahan");
const shirazElem = document.getElementById("shiraz");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("toggled");
});

discoverTehranBtn.addEventListener("click", () => {
    tehranElem.classList.toggle("tehran-toggled");
});

discoverShirazBtn.addEventListener("click", () => {
    shirazElem.classList.toggle("shiraz-toggled");
});

discoverIsfahanBtn.addEventListener("click", () => {
    isfahanElem.classList.toggle("isfahan-toggled");
});

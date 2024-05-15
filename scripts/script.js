"use strict";

const menuBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("toggled");
});

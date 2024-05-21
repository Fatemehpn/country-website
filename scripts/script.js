"use strict";

const menuBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-menu");
const accordianBtn = document.getElementsByClassName("accordion");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("toggled");
});

for (let i = 0; i < accordianBtn.length; i++) {
    accordianBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
//  Used the sample code from w3schools website

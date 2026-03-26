"use strict";
const startbutton = document.getElementById("press_start");
const level1data = document.getElementById("level1");
startbutton.addEventListener("click", () => {
    level1data.style.display = "block";
});

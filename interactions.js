"use strict";
const startbutton = document.getElementById("press_start");
const dialogue1 = document.getElementById("dialogue1");
const yoelsb = document.getElementById("yoelsb");
const overview = document.getElementById("overview");
const majordata = document.getElementById("majordata");
const levelintro = document.getElementById("levelintro");

startbutton.addEventListener("click", () => {
    overview.style.display = "block";
    startbutton.style.display = "none"
    majordata.style.display = "block"
    dialogue1.style.display = "flex"
    yoelsb.style.display = "block"
    levelintro.style.display = "flex"
});


const m1button = document.getElementById("m1");
const m1data = document.getElementById("m1info");
m1button.addEventListener("click", () => {
    if(m1data.style.display === "block"){
        m1data.style.display = "none";
    }
    else{
        m1data.style.display = "block";
    }
});
const m2button = document.getElementById("m2");
const m2data = document.getElementById("m2info");
m2button.addEventListener("click", () => {
    if(m2data.style.display === "block"){
        m2data.style.display = "none";
    }
    else{
        m2data.style.display = "block";
    }
});
const m3button = document.getElementById("m3");
const m3data = document.getElementById("m3info");
m3button.addEventListener("click", () => {
    if(m3data.style.display === "block"){
        m3data.style.display = "none";
    }
    else{
        m3data.style.display = "block";
    }
});

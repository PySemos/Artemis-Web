"use strict"
let current = 0;
const links_photos = [
    "img/60_anniversary_moon_photo.jpg",
    "img/Artemis_I_rocket_pillars.jpg",
    "img/slsatthepad.jpg",
]
window.onload = ()=>{
    const image = document.querySelector(".image")
    const boton_i = document.querySelector("#button-izquierdo")
    const boton_d = document.querySelector("#button-derecho")
    boton_i.addEventListener("click",()=>{
        if (current-1 < 0){
            current = links_photos.length -1
        }
        else{
            current--;
        }
        image.src = links_photos[current]
    })
    boton_d.addEventListener("click",()=>{
        if (current+1>=links_photos.length){
            current = 0
        }
        else{
            current++
        }
        image.src = links_photos[current]
    })
}
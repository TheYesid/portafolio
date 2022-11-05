const IconoDeMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".desplegable");

let contador = 0;

IconoDeMenu.addEventListener("click", function(){
    menu.classList.toggle("desplegable-show");
})
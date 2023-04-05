// open and close the favorites/burger menu
const favorite = document.querySelector('.favorites-menu');
const burger = document.querySelector('.burger');

export function openMenu() { 
    if (favorite.classList.contains('open')) {
        favorite.classList.remove('open');
        burger.style.background = "url(/src/images/burger.svg)";
    } else { 
        favorite.classList.add('open');
        burger.style.background = "url('/src/images/close.svg')";
    }
};


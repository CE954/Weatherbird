// open and close the favorites/burger menu
const favorite = document.querySelector('.favorites-menu');
export function openMenu() { 
    if (favorite.classList.contains('open')) {
        favorite.classList.remove('open');
    } else { 
        favorite.classList.add('open');
    }
};


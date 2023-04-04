// Pin/favorite locations
// Grab innerHTML of the current location and store it in an array

export const favorites = []; 
const pin = document.querySelector('.pin');

export function pinToggle() {
    let currentLocation = document.querySelector('.location').innerHTML;
    let currentIcon = document.querySelector('.image img').src;
    let currentTemp = document.querySelector('.temp').innerHTML;
    if (!checkIfFavorited(currentLocation) || favorites.length === 0) {
        favorites.push( [
            currentLocation,
            currentIcon,
            currentTemp
        ]);
        displayPinnedLocations();
        pin.classList.remove('unpinned');
        pin.classList.add('pinned');
    } else {
        removeFromSidebar(currentLocation);
        removeFromFavorites(currentLocation);
    }
 }

 // Function to check if a location is already pinned
export function checkIfFavorited(location) { 
    for(let i = 0; i < favorites.length; i++) {
        if (favorites[i][0] === location) {
            return true;
        }
    }
    return false;
}

// Function to splice the location from the favorites array
export function removeFromFavorites(location) {
    for(let i = 0; i < favorites.length; i++) {
        if (favorites[i][0] === location) {
            favorites.splice(i, 1);
            pin.classList.remove('pinned')
            pin.classList.add('unpinned');
        }
    }
}

// Add a function to display the pinned locations
export function displayPinnedLocations() { 
    for (let i = 0; i < favorites.length; i++) {
        let className = favorites[i][0].split(" ").join("-");
        if (!document.querySelector(`.${className}`)) {
            let pinnedLocation = document.createElement('div');
            pinnedLocation.classList.add(`${className}`);
            pinnedLocation.innerHTML = "";
            pinnedLocation.innerHTML += `
                <div class="pinned-location__name">${favorites[i][0]}</div>
                <div class="pinned-location__icon"><img src="${favorites[i][1]}" alt="weather icon"></div>
                <div class="pinned-location__temp">${favorites[i][2]}</div>
            `
            document.querySelector('.favorites-menu nav').appendChild(pinnedLocation);
        }
    }
}

//testing
window.displayPinnedLocations = displayPinnedLocations;
window.favorites = favorites;

// Add a function to remove the sidebar of locations
export function removeFromSidebar(location) {
    let className = location.split(" ").join("-");
    let toBeRemoved = document.querySelector(`.${className}`);
    // console.log(toBeRemoved);
    while (toBeRemoved.firstChild) {
        toBeRemoved.removeChild(toBeRemoved.firstChild);
    }
    toBeRemoved.remove();
}

// check if favorites box is empty and display a message
const emptyMessage = document.querySelector('.empty-message');

export function checkIfEmpty() {
    if (favorites.length === 0) {
        emptyMessage.style.display = "block";
    } else {    
        emptyMessage.style.display = "none";
    }
}

 // Add a separate funciton to refresh the pinned locations (API call)

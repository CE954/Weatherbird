// Birdy will comment on the weather
const birdy = document.querySelector('.birdy');
const birdyComment = document.querySelector('.birdy p');

// Birdy says his intro when the page loads
document.addEventListener('DOMContentLoaded', birdyIntro, { once: true });

export function birdyWeatherComments() {

}

export function birdyIntro() {
    birdyComment.innerHTML = "Hey there!";
    setTimeout(() => {
        birdyComment.innerHTML = "I'm here to help you find the weather!";
        setTimeout(() => {
            birdyComment.innerHTML = "Just type in a location and I'll do the rest!";
            setTimeout(() => {
                birdyComment.innerHTML = "Or, you can use your current location!";
                setTimeout(() => {
                    birdyComment.innerHTML = "I'll probably forget who you are because there's no cookies yet!";
                    setTimeout(() => {
                        birdyComment.innerHTML = "But, I hope you have a good time!";
                        clearBirdyComment();
                }, 2500);
            }, 2500);
        }, 2500);
    }, 2500);
}, 2500);
}

export function birdyUnitChange() {
    birdyComment.innerHTML = "Please refresh the data after changing units!"
    clearBirdyComment();
}

// Birdy gives some tips when hovering over certain elements
let geoSearch = document.querySelector('#geo-search');
geoSearch.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Click here to use your current location!";
    clearBirdyComment();
}, {once: true});

// Clear out Birdy comment
function clearBirdyComment() {
    setTimeout(() => {
        birdyComment.innerHTML = "";
    }, 2500);
}

let refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Click here to refresh the data!";
    clearBirdyComment();
}, { once: true });

let pinButton = document.querySelector('.pin');
pinButton.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Click here to pin or unpin the location!";
    clearBirdyComment();
}, {once: true});

// Birdy toggle 
let birdyToggle = document.querySelector('#birdy-toggle');
birdyToggle.addEventListener('change', function() {
    // if (birdy.style.display === "none") {
    //     birdy.style.display = "block";
    // } else {
    //     birdy.style.display = "none";
    // }
    if (birdy) {
       birdy.firstChild.remove();
       birdy.remove()
    } else {
        let newBirdy = document.createElement("div");
        newBirdy.classList.add("birdy");
        let comment = document.createElement("p")
        newBirdy.appendChild(comment);
        document.body.appendChild(newBirdy);
    }
});

birdyToggle.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "If you don't like me, you can turn me off!";
    clearBirdyComment();
}, {once: true});
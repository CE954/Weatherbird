import { currentUnit } from "./unitSwitch";

const birdy = document.querySelector('.birdy');
const birdyComment = document.querySelector('.birdy p');

document.addEventListener('DOMContentLoaded', birdyIntro, { once: true });

export function birdyWeatherComments() {
    let location = document.querySelector('.location');
    let desc = document.querySelector('.description');
    let windSpeed = document.querySelector('.wind');

    let time = document.querySelector('.hour div:first-child')
    if (currentUnit === 'imperial' && (windSpeed.innerText.split(" ")[2]) > 20) {
        windSpeed = 'windy'
    } else if (currentUnit === 'metric' && parseInt(windSpeed.innerText.split(" ")[2]) > 9) {
        windSpeed = 'windy'
    } else {
        windSpeed = 'not windy'
    };

    let tempComment = birdyTempComments();
    let descComment = uncapitalize(desc.textContent)
    let timeComment = time.textContent.includes('pm') ? 'evening' : 'morning';

    birdyComment.textContent = `It's ${tempComment} in ${location.textContent} this ${timeComment}!`; 
    setTimeout(() => {
        birdyComment.textContent = `We've got ${descComment} and it's ${windSpeed}!`;
        if (windSpeed === 'windy') {
            setTimeout(() => {
                birdyComment.textContent = "I'd bring a jacket!"
                clearBirdyComment();
            }, 2500);
        } else {
            clearBirdyComment();
        }
    }, 2500);
}

function birdyTempComments() {
    let tempDiv = document.querySelector('.temp');
    let temp = parseInt(tempDiv.textContent.split('°')[0]);
    
    if (currentUnit === 'imperial') {
        switch(true) {
            case temp <= 32:
                return 'cold as $#!#';
            case temp > 32 && temp <= 50:
                return 'chilly';
            case temp > 50 && temp <= 70:
                return 'cool'; 
            case temp > 70 && temp <= 90:
                return 'hot';
            case temp > 90:
                return 'hot as !$!#';
        }
    } else { 
        switch (true) {
            case temp <= 0:
                return 'cold as $#!#';
            case temp > 0 && temp <= 10:
                return 'chilly';
            case temp > 10 && temp <= 20:
                return 'cool';
            case temp > 20 && temp <= 32:
                return 'hot';
            case temp >= 40:
                return 'hot as !$!#';
        }
    }
}

function uncapitalize(string) {
    let str = string.split(" ");
    let newSent = str.map(word => word.charAt(0).toLowerCase() + word.slice(1));
    return newSent.join(" ");
}

export function birdyIntro() {
    birdyComment.innerHTML = "Hey there!";
    setTimeout(() => {
        birdyComment.innerHTML = "I'm here to help you find the weather!";
        setTimeout(() => {
            birdyComment.innerHTML = "Just type in a location and I'll do the rest!";
            setTimeout(() => {
                birdyComment.innerHTML = "Use this format! (City, State, Country)";
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
}, 2500);
}

export function birdyUnitChange() {
    birdyComment.innerHTML = "Please refresh the data after changing units!"
    clearBirdyComment();
}

let geoSearch = document.querySelector('#geo-search');
geoSearch.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Click here to use your current location!";
    clearBirdyComment();
}, {once: true});

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
    birdyComment.innerHTML = "Click here to pin or unpin the location!"
    setTimeout(() => {
        birdyComment.innerHTML = "If you have too many pins you can scroll through them!";
        setTimeout(()=> {
            clearBirdyComment();
        }, 2500);
    }, 2500);
}, {once: true});

let birdyToggle = document.querySelector('#birdy-toggle');
birdyToggle.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "If you don't like me, you can turn me off!";
    clearBirdyComment();
}, {once: true});

let birdyScrollAdvice1 = document.querySelector('.hourly');
birdyScrollAdvice1.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Hover over the hours and scroll to see the forecast!";
    clearBirdyComment();
}, {once: true});

let birdyScrollAdvice2 = document.querySelector('.daily');
birdyScrollAdvice2.addEventListener('mouseover', () => {
    birdyComment.innerHTML = "Hover over the days and scroll to see the forecast!";
    clearBirdyComment();
}, {once: true});

birdyToggle.addEventListener('change', function() {
    if (birdy.style.display === 'none') {
        birdy.style.display = 'block';
        birdyComment.innerHTML = "I'm back!";
        clearBirdyComment();
        activateBirdy();
    } else {
        birdy.style.display = 'none';
        clearBirdyComment();
        deactivateBirdy();
    }
});

document.addEventListener('DOMContentLoaded', activateBirdy, {once: true});

function moveBirdy(event) {
    birdy.style.left = (event.pageX) + 'px';
    birdy.style.top = (event.pageY - 50) + 'px';
}

function activateBirdy () {
    document.addEventListener('mousemove', moveBirdy);
}

function deactivateBirdy () {
    document.removeEventListener('mousemove', moveBirdy);
}

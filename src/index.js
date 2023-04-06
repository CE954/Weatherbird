import { getDayIcon, getNightIcon, getDayBackground, getNightBackground } from "./scripts/icon.js";
import { openMenu } from "./scripts/burger.js";
import { pinToggle, checkIfEmpty, checkIfFavorited } from "./scripts/favorite.js";
import { key, getForecast, deleteForecast, capitalize, deleteHourlyForecast, windUnit } from "./scripts/forecast.js";
import { currentUnit, unitSwitch, getUnitSymbol } from "./scripts/unitSwitch.js";
import { changePinnedUnits } from "./scripts/refreshPinned.js";
import {birdyWeatherComments, birdyUnitChange} from "./scripts/quirkyBirdy.js";

const searchBar = document.querySelector(".search-bar");
const moreDetails = document.querySelector(".details");
const moreDetails2 = document.querySelector(".details-2");
const geoSearch = document.querySelector("#geo-search");
const picture = document.querySelector(".image img");
const searchForm = document.querySelector(".search");
const loader = document.querySelector(".loader");
const pin = document.querySelector(".pin");
const refresh = document.querySelector('.refresh');


checkIfEmpty();

function fetchWeather(city) {
    refresh.style.display = "none";
    loader.style.display = "block";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${currentUnit}`)
    .then(response => response.json())
    .then(data => { 
        if (data.cod !== '404') { 
            deleteHourlyForecast();
            deleteForecast();
            document.querySelector('.weather').classList.add('fadeIn');
            picture.classList.add('fadeIn');
            document.querySelector('.card').style.height = '350px';
            searchBar.style.border = '1px solid #ccc';
            searchBar.classList.remove('shake');
            document.querySelector('#body').style.height = '3000px';
            displayWeather(data); 
            moreDetails.classList.add('fadeIn');
            moreDetails.style.display = "block";
            moreDetails2.classList.add('fadeIn');
            moreDetails2.style.display = "block";
            geoSearch.style.marginTop = "4px";
            loader.style.display = "none";
            refresh.style.display = "block";
            pin.classList.add('fadeIn');
            getForecast(data.coord.lat, data.coord.lon);
            setTimeout(() => {
                birdyWeatherComments();
            }, 2500);
        } else {
           searchBar.classList.add('shake');
           searchBar.style.border = '1px solid #cc0505';
           searchBar.placeholder = "City not found";
           loader.style.display = "none";
            refresh.style.display = "block";
        }
     })
    }

function displayWeather(data) {
    const { name } = data;
    const { speed } = data.wind;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    document.querySelector('.location').innerText = name;
    document.querySelector(".temp").innerText = Math.round(temp) + `${getUnitSymbol()}`;
    document.querySelector(".description").innerText = capitalize(description);
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} ${windUnit()}`;
    if (icon.includes("d")) {
        picture.src = getDayIcon(icon);
        getDayBackground(icon);
        picture.style.display = "block"
    } else {
        picture.src = getNightIcon(icon);
        getNightBackground(icon);
        picture.style.display = "block"
    }

    if (checkIfFavorited(name)) {
        pin.classList.remove('unpinned');
        pin.classList.add('pinned');
    } else {
        pin.classList.remove('pinned');
        pin.classList.add('unpinned');
    };
}


window.fetchWeather = fetchWeather;
window.displayWeather = displayWeather;

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.querySelector(".search-bar").value;
    if (searchBar.value === "") return;
    fetchWeather(input);
    searchBar.value = "";
    searchBar.placeholder = "Enter a location";
})


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
}

function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            searchBar.placeholder = "Enter a location";
            loader.style.display = "none";
            return fetchWeather(data.name);
        });
}

function error(err) { 
    console.warn(`ERROR(${err.code}): ${err.message}`);
    loader.style.display = "none";
    if (err.code === 1) {
        searchBar.classList.add('shake');
        searchBar.style.border = '1px solid #cc0505';
        searchBar.placeholder = "Location access denied";
    } else if (err.code === 2) {
        searchBar.placeholder = "Can't find location";
        searchBar.classList.add('shake');
        searchBar.style.border = '1px solid #cc0505';
    } else if (err.code === 3) {
        searchBar.placeholder = "Location request timed out";
        searchBar.classList.add('shake');
        searchBar.style.border = '1px solid #cc0505';
    }
}

geoSearch.addEventListener('click', function(event) {
    searchBar.placeholder = "Finding location...";
    refresh.style.display = "none";
    loader.style.display = "block";
    navigator.geolocation.getCurrentPosition(success, error, options);
});


let detailsButton = document.querySelector('.details-button');

detailsButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.details').scrollIntoView({behavior: 'smooth', block: 'center'});
})


const burger = document.querySelector('.burger');
burger.addEventListener('click', openMenu);


pin.addEventListener('click', pinToggle);
pin.addEventListener('click', checkIfEmpty);


const hoursBox = document.querySelector('.hours');
const daysBox = document.querySelector('.days');

hoursBox.addEventListener('wheel', function(event) {
    event.preventDefault();
    hoursBox.scrollLeft += event.deltaY;
}); 

daysBox.addEventListener('wheel', function(event) {
    event.preventDefault();
    daysBox.scrollLeft += event.deltaY;
});


const unitToggle = document.querySelector('#unit-toggle input');
unitToggle.addEventListener('change', unitSwitch);

const unitMessage = document.querySelector('.unit-message');
unitToggle.addEventListener('change', function() {
    if (unitMessage.innerHTML === 'Fahrenheit') {
        unitMessage.style.display = "block";
        unitMessage.innerHTML = 'Celsius';
        setTimeout(() => {
            unitMessage.style.display = "none";}
            , 2000)
    } else {
        unitMessage.innerHTML = 'Fahrenheit';
        unitMessage.style.display = "block";
        setTimeout(() => {
            unitMessage.style.display = "none";
        }, 2000)
    }
});

unitToggle.addEventListener('change', birdyUnitChange, {once: true});


refresh.addEventListener('click', function(event) {
    event.preventDefault();
    if (document.querySelector('.location').innerText === "") {
        searchBar.classList.add('shake');
        setTimeout(() => {
            searchBar.classList.remove('shake');
        }, 500)
        return;
    } else {
        fetchWeather(document.querySelector('.location').innerText);
        changePinnedUnits();
    }
})


document.addEventListener('click', function(event) {
    let element = event.target;
    if (element.classList.contains('pinned-location_name')) {
        fetchWeather(element.innerText);
    } else if (element.classList.contains('pinned-location_icon')) {
        fetchWeather(element.parentElement.className.split("-").join(" "));
    } else if (element.classList.contains('pinned-location_temp')) {
       fetchWeather(element.parentElement.className.split("-").join(" "));
    } else if (element.classList.contains('pinned-icon')) {
        console.log(element.id.split("-").join(" "));
        fetchWeather(element.id.split("-").join(" "));
    }
})


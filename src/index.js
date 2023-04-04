import { getDayIcon, getNightIcon, scene } from "./scripts/icon.js";
import { openMenu } from "./scripts/burger.js";
import { pinToggle, checkIfEmpty, checkIfFavorited } from "./scripts/favorite.js";
import { key, getForecast, deleteForecast, capitalize, deleteHourlyForecast } from "./scripts/forecast.js";
import { currentUnit, unitSwitch, getUnitSymbol } from "./scripts/unitSwitch.js";

const searchBar = document.querySelector(".search-bar");
const moreDetails = document.querySelector(".details");
const moreDetails2 = document.querySelector(".details-2");
const geoSearch = document.querySelector("#geo-search");
const picture = document.querySelector(".image img");
const searchForm = document.querySelector(".search");
const loader = document.querySelector(".loader");
const pin = document.querySelector(".pin");

// Display the empty favorites message on startup
checkIfEmpty();

// API calls
function fetchWeather(city) {
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
            pin.classList.add('fadeIn');
            getForecast(data.coord.lat, data.coord.lon);
        } else {
           searchBar.classList.add('shake');
           searchBar.style.border = '1px solid #cc0505';
           searchBar.placeholder = "City not found";
           loader.style.display = "none";
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
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} MPH`;
    if (icon.includes("d")) {
        picture.src = getDayIcon(icon);
        picture.style.display = "block"
    } else {
        picture.src = getNightIcon(icon);
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

// Search button event listener
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.querySelector(".search-bar").value;
    if (searchBar.value === "") return;
    fetchWeather(input);
    searchBar.value = "";
    searchBar.placeholder = "Enter a location";
})


// Geolocation
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
    loader.style.display = "block";
    navigator.geolocation.getCurrentPosition(success, error, options);
});

// Scroll to details
let detailsButton = document.querySelector('.details-button');

detailsButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.details').scrollIntoView({behavior: 'smooth', block: 'center'});
})

// Burger toggle
const burger = document.querySelector('.burger');
burger.addEventListener('click', openMenu);

// Pin locations
pin.addEventListener('click', pinToggle);
pin.addEventListener('click', checkIfEmpty);

// Horizontal scroll for hourly and daily forecast
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
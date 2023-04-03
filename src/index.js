import { getDayIcon, getNightIcon } from "./scripts/icon.js";
import { openMenu } from "./scripts/burger.js";

const key = "62b8f696194b27ae3d38708afeb4c3cc";

const searchBar = document.querySelector(".search-bar");
const moreDetails = document.querySelector(".details");
const geoSearch = document.querySelector("#geo-search");
const picture = document.querySelector(".image img");
const searchForm = document.querySelector(".search");
const loader = document.querySelector(".loader");
const pin = document.querySelector(".pin");

// API calls
function fetchWeather(city) {
    loader.style.display = "block";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => { 
        if (data.cod !== '404') { 
            document.querySelector('.weather').classList.add('fadeIn');
            picture.classList.add('fadeIn');
            pin.classList.add('fadeIn');
            document.querySelector('.card').style.height = '350px';
            searchBar.style.border = '1px solid #ccc';
            searchBar.classList.remove('shake');
            document.querySelector('#body').style.height = '1400px';
            displayWeather(data); 
            moreDetails.classList.add('fadeIn');
            moreDetails.style.display = "block";
            geoSearch.style.marginTop = "4px";
            loader.style.display = "none";
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
    // const { country } = data.sys;
    document.querySelector('.location').innerText = name;
    document.querySelector(".temp").innerText = Math.round(temp) + "°F";
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
}

function capitalize(string) { 
    let str = string.split(" ");
    let newSent = str.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return newSent.join(" ");
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
    document.querySelector('.details').scrollIntoView({behavior: 'smooth'});
})

// Burger toggle
const burger = document.querySelector('.burger');
burger.addEventListener('click', openMenu);

// Pin locations

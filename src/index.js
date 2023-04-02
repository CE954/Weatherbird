// import getDayIcon from './scripts/icon.js';

let key = "62b8f696194b27ae3d38708afeb4c3cc";

const searchBar = document.querySelector(".search-bar");
const moreDetails = document.querySelector(".details");
const geoSearch = document.querySelector("#geo-search");
const picture = document.querySelector(".image img");
const searchForm = document.querySelector(".search");
const loader = document.querySelector(".loader");

// API calls
function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => { 
        if (data.cod !== '404') { 
            document.querySelector('.weather').classList.add('fadeIn');
            picture.classList.add('fadeIn');
            document.querySelector('.card').style.height = '350px';
            searchBar.style.border = '1px solid #ccc';
            searchBar.classList.remove('shake');
            document.querySelector('#body').style.height = '1400px';
            displayWeather(data); 
            moreDetails.classList.add('fadeIn');
            moreDetails.style.display = "block";
            geoSearch.style.marginTop = "4px";
        } else {
           searchBar.classList.add('shake');
           searchBar.style.border = '1px solid #cc0505';
           searchBar.placeholder = "City not found";
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

console.log("Hello World!");

window.fetchWeather = fetchWeather;
window.displayWeather = displayWeather;

// Search button event listener
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    loader.style.display = "block";
    let input = document.querySelector(".search-bar").value;
    if (searchBar.value === "") return;
    fetchWeather(input);
    searchBar.value = "";
    searchBar.placeholder = "Enter a location";
    loader.style.display = "none";
})

// Get icons
function getDayIcon(icon) {
    switch (icon) {
        case "01d":
            return "src/images/day.svg";
        case "02d":
            return "src/images/cloudy-day-1.svg";
        case "03d":
            return "src/images/cloudy-day-2.svg";
        case "04d":
            return "src/images/cloudy.svg";
        case "09d":
            return "src/images/rainy-4.svg";
        case "10d":
            return "src/images/rainy-6.svg";
        case "11d":
            return "src/images/thunder.svg";
        case "13d":
            return "src/images/snowy-6.svg";
        case "50d":
            return "src/images/cloudy.svg";
    }
}

function getNightIcon(icon) {
    switch (icon) {
        case "01n":
            return "src/images/night.svg";
        case "02n":
            return "src/images/cloudy-night-1.svg";
        case "03n":
            return "src/images/cloudy-night-1.svg";
        case "04n":
            return "src/images/cloudy-night-1.svg";
        case "09n":
            return "src/images/rainy-4.svg";
        case "10n":
            return "src/images/rainy-6.svg";
        case "11n":
            return "src/images/thunder.svg";
        case "13n":
            return "src/images/snowy-6.svg";
        case "50n":
            return "src/images/cloudy.svg";
    }
}

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


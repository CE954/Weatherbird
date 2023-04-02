// import getDayIcon from './scripts/icon.js';

//API calls
let key = "62b8f696194b27ae3d38708afeb4c3cc";

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => { 
        if (data.cod !== '404') { 
            document.querySelector('.weather').classList.add('fadeIn');
            document.querySelector('.image img').classList.add('fadeIn');
            document.querySelector('.card').style.height = '350px';
            document.querySelector('.search-bar').style.border = '1px solid #ccc';
            document.querySelector('.search-bar').classList.remove('shake');
            document.querySelector('#body').style.height = '1400px';
            displayWeather(data); 
            document.querySelector('.details').classList.add('fadeIn');
            document.querySelector('.details').style.display = "block";
            document.querySelector('#geo-search').style.marginTop = "4px";
        } else {
            document.querySelector('.search-bar').classList.add('shake');
            document.querySelector('.search-bar').style.border = '1px solid #cc0505';
            document.querySelector('.search-bar').placeholder = "City not found";
        }
     })
}

function displayWeather(data) {
    const { name } = data;
    const { speed } = data.wind;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { country } = data.sys;
    document.querySelector('.location').innerText = name;
    document.querySelector(".temp").innerText = Math.round(temp) + "°F";
    document.querySelector(".description").innerText = capitalize(description);
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} MPH`;
    if (icon.includes("d")) {
        document.querySelector(".image img").src = getDayIcon(icon);
        document.querySelector(".image img").style.display = "block"
    } else {
        document.querySelector(".image img").src = getNightIcon(icon);
        document.querySelector(".image img").style.display = "block"
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

// Search button
let searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.querySelector(".search-bar").value;
    if (input === "") return;
    fetchWeather(input);
    document.querySelector(".search-bar").value = "";
    document.querySelector('.search-bar').placeholder = "Enter a location";
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

//transition 


// Geolocation
let geoSearch = document.querySelector('#geo-search')
geoSearch.addEventListener('click', function(event) {
   document.querySelector('.search-bar').placeholder = "Finding location...";
   navigator.geolocation.getCurrentPosition(function(position) {
         let lat = position.coords.latitude;
         let lon = position.coords.longitude;
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
         .then(response => response.json())
         .then(data => {
            document.querySelector('.search-bar').placeholder = "Enter a location";
            return fetchWeather(data.name);
         })
   })
});

// testing
// document.querySelector(".image img").src = "src/images/day.svg"


// Error handling example
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error(response);
//         }
//     })
//     .then(
//         data => {
//             console.log("Success!");
//             console.log(data);
//         },
//         errorResponse => {
//             console.log("Failure!");
//             console.log(errorResponse);
//         }
//     );

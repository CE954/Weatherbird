//API call test
let key = "62b8f696194b27ae3d38708afeb4c3cc";

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => displayWeather(data))
}

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.location').innerText = name;
    document.querySelector(".temp").innerText = Math.round(temp) + "°F";
    document.querySelector(".description").innerText = capitalize(description);
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} MPH`;
}

function capitalize(string) { 
    str = string.split(" ");
    let newSent = str.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return newSent.join(" ");
}

console.log("Hello World!");

window.fetchWeather = fetchWeather;
window.displayWeather = displayWeather;

let searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", function() {
    // event.preventDefault();
    let input = document.querySelector(".search-bar").value;
    fetchWeather(input);
})


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

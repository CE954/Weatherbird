//API call test
let key = "62b8f696194b27ae3d38708afeb4c3cc";

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(data => console.log(data))
}

console.log("Hello World!");

window.fetchWeather = fetchWeather

//testing
let button = document.getElementById("button");

button.addEventListener("click", function() {
    console.log("I am a working button");
})

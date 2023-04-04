// Function to get 5 day forecast data
import { getDayIcon, getNightIcon } from './icon.js';

export const key = "62b8f696194b27ae3d38708afeb4c3cc";

export function getForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => { 
        if (data.cod !== '404') { 
            displayHourlyForecast(data)
            displayDailyForecast(data); 
        } else {
            console.log('error');
        }
     })
}

window.getForecast = getForecast;
window.displayDailyForecast = displayDailyForecast;
window.deleteForecast = deleteForecast;

export function displayHourlyForecast(data) {
    let hours = document.querySelector('.hours');
    for (let i = 0; i <= 23; i++) {
        let hour = document.createElement('div');
        hour.classList.add('hour');
        let temp = Math.round(data.hourly[i].temp);
        let icon = data.hourly[i].weather[0].icon;
        let src = "";

        if (icon.includes("d")) {
            src = getDayIcon(icon);
        } else {
            src = getNightIcon(icon);
        }

        let dt = new Date (data.hourly[i].dt * 1000);
        let conversion = timeConversion(dt.getHours())

        hour.innerHTML = "";
        hour.innerHTML += `
            <div class="hour_time">${conversion}</div>
            <div class="hour_icon"><img src=${src} alt="weather icon"></div>
            <div class="hour_temp">${temp} °F</div>
        `
        hours.appendChild(hour);
    }
}

// Convert from military time to standard time

function timeConversion(hours) {
    if (hours > 12) {
        return `${hours - 12}pm`;
    } else if (hours === 0) {
        return `12am`;
    } else {
        return `${hours}am`;
    }
}

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function displayDailyForecast(data) {
    let days = document.querySelector('.days');
    for (let i = 0; i <= 6; i++) {
        let day = document.createElement('div');
        day.classList.add('day');
        let minTemp = Math.round(data.daily[i].temp.min);
        let maxTemp = Math.round(data.daily[i].temp.max);
        let icon = data.daily[i].weather[0].icon;
        let src = "";

        if (icon.includes("d")) {
            src = getDayIcon(icon);
        } else {
            src = getNightIcon(icon);
        }

        let dt = new Date (data.daily[i].dt * 1000);

        day.innerHTML = "";
        day.innerHTML += `
            <div class="day_name">${week[dt.getDay()]}</div>
            <div class="day_icon"><img src=${src} alt="weather icon"></div>
            <div class="day_temp">${minTemp} - ${maxTemp} °F</div>
            <div class="day_desc">${capitalize(data.daily[i].weather[0].description)}</div>
        `
        days.appendChild(day);
    }
}

export function deleteForecast() {
    let days = document.querySelector('.days');
    days.innerHTML = "";
}

export function deleteHourlyForecast() {
    let hours = document.querySelector('.hours');
    hours.innerHTML = "";
}

export function capitalize(string) {
    let str = string.split(" ");
    let newSent = str.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return newSent.join(" ");
}


export const scene = document.querySelector('.background');

function getDayIcon(icon) {
    switch (icon) {
        case "01d":
            return "./src/images/day.svg";
        case "02d":
            return "./src/images/cloudy-day-1.svg";
        case "03d":
            return "./src/images/cloudy-day-2.svg";
        case "04d":
            return "./src/images/cloudy.svg";
        case "09d":
            return "./src/images/rainy-4.svg";
        case "10d":
            return "./src/images/rainy-6.svg";
        case "11d":
            return "./src/images/thunder.svg";
        case "13d":
            return "./src/images/snowy-6.svg";
        case "50d":
            return "./src/images/cloudy.svg";
    }
}

function getNightIcon(icon) {
    switch (icon) {
        case "01n":
            return "./src/images/night.svg";
        case "02n":
            return "./src/images/cloudy-night-1.svg";
        case "03n":
            return "./src/images/cloudy-night-1.svg";
        case "04n":
            return "./src/images/cloudy-night-1.svg";
        case "09n":
            return "./src/images/rainy-4.svg";
        case "10n":
            return "./src/images/rainy-6.svg";
        case "11n":
            return "./src/images/thunder.svg";
        case "13n":
            return "./src/images/snowy-6.svg";
        case "50n":
            return "./src/images/cloudy.svg";
    }
}



export function getDayBackground(icon) {
    const logo = document.querySelector('.title')
    logo.style.color = "black";
    const speech = document.querySelector('.birdy p');
    speech.style.color = "black";
    switch (icon) {
        case "01d":
            scene.style.background = "url(./src/images/ClearSky.svg)";
        case "02d":
            scene.style.background = "url(./src/images/FewClouds.svg)";
        case "03d":
            scene.style.background = "url(./src/images/ScatteredClouds.svg)";
        case "04d":
            scene.style.background = "url(./src/images/BrokenClouds.svg)";
        case "09d":
            scene.style.background = "url(./src/images/RainDay.svg)";
        case "10d":
            scene.style.background = "url(./src/images/RainDay.svg)";
        case "11d":
            scene.style.background = "url(./src/images/Thunderstorm.svg)";
        case "13d":
            scene.style.background = "url(./src/images/SnowDay.svg)";
        case "50d":
            scene.style.background = "url(./src/images/BrokenClouds.svg)";
    }
}

export function getNightBackground(icon) {
    const logo = document.querySelector('.title')
    logo.style.color = "white";
    const speech = document.querySelector('.birdy p');
    speech.style.color = "white";
    switch (icon) {
        case "01n":
            scene.style.background = "url(./src/images/ClearNightSky.svg)";
        case "02n":
            scene.style.background = "url(./src/images/FewCloudsNight.svg)";
        case "03n":
            scene.style.background = "url(./src/images/ScatteredCloudsNight.svg)";
        case "04n":
            scene.style.background = "url(./src/images/BrokenCloudsNight.svg)";
        case "09n":
            scene.style.background = "url(./src/images/RainNight.svg)";
        case "10n":
            scene.style.background = "url(./src/images/RainNight.svg)";
        case "11n":
            scene.style.background = "url(./src/images/Thunderstorm.svg)";
        case "13n":
            scene.style.background = "url(./src/images/SnowNight.svg)";
        case "50n":
            scene.style.background = "url(./src/images/BrokenCloudsNight.svg)";
    }
}

export { getDayIcon, getNightIcon};


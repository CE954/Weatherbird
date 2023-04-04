// Get icons
export const scene = document.querySelector('.background');

function getDayIcon(icon) {
    switch (icon) {
        case "01d":
            // scene.style.background = "url(/src/images/PartlyCloudy.svg)";
            return "src/images/day.svg";
        case "02d":
            return "src/images/cloudy-day-1.svg";
        case "03d":
            return "src/images/cloudy-day-2.svg";
        case "04d":
            // scene.style.background = "url(/src/images/SeaOfClouds.svg)";
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
            // scene.style.background = "url(/src/images/NightOfClouds.svg)";
            return "src/images/night.svg";
        case "02n":
            // scene.style.background = "url(/src/images/NightOfClouds.svg)";
            return "src/images/cloudy-night-1.svg";
        case "03n":
            // scene.style.background = "url(/src/images/NightOfClouds.svg)";
            return "src/images/cloudy-night-1.svg";
        case "04n":
            // scene.style.background = "url(/src/images/SeaOfClouds.svg)";
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

// Create a separate function to handle the background image

export { getDayIcon, getNightIcon};
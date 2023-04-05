// Get icons
export const scene = document.querySelector('.background');

function getDayIcon(icon) {
    switch (icon) {
        case "01d":
            // scene.style.background = "url(/src/images/PartlyCloudy.svg)";
            return "../../images/day.svg";
        case "02d":
            return "../../images/cloudy-day-1.svg";
        case "03d":
            return "../../images/cloudy-day-2.svg";
        case "04d":
            // scene.style.background = "url(/../../images/SeaOfClouds.svg)";
            return "../../images/cloudy.svg";
        case "09d":
            return "../../images/rainy-4.svg";
        case "10d":
            return "../../images/rainy-6.svg";
        case "11d":
            return "../../images/thunder.svg";
        case "13d":
            return "../../images/snowy-6.svg";
        case "50d":
            return "../../images/cloudy.svg";
    }
}

function getNightIcon(icon) {
    switch (icon) {
        case "01n":
            // scene.style.background = "url(/src/images/NightOfClouds.svg)";
            return "../../images/night.svg";
        case "02n":
            // scene.style.background = "url(/../../images/NightOfClouds.svg)";
            return "../../images/cloudy-night-1.svg";
        case "03n":
            // scene.style.background = "url(/../../images/NightOfClouds.svg)";
            return "../../images/cloudy-night-1.svg";
        case "04n":
            // scene.style.background = "url(/../../images/SeaOfClouds.svg)";
            return "../../images/cloudy-night-1.svg";
        case "09n":
            return "../../images/rainy-4.svg";
        case "10n":
            return "../../images/rainy-6.svg";
        case "11n":
            return "../../images/thunder.svg";
        case "13n":
            return "../../images/snowy-6.svg";
        case "50n":
            return "../../images/cloudy.svg";
    }
}

// Create a separate function to handle the background image

export { getDayIcon, getNightIcon};
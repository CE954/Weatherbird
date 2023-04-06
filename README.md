
![Screen Shot 2023-04-06 at 1 40 36 PM](https://user-images.githubusercontent.com/114632709/230489916-0e1c0fd7-9141-4cef-9092-b8da30827c45.png)

https://ce954.github.io/Weatherbird/

# Weatherbird
Weatherbird is an easy-to-use weather application that displays the most 
up-to-date weather information and forecasts for any given city in a simple but
unique way. Weatherbird also allows you to retreive the local weather your 
current position through geolocation. 

## Table of contents
1. [Initial Design](#initial)
2. [Key Features](#keyfeatures)
3. [Technologies, APIs](#technologies)
4. [Code Highlights](#highlights)
5. [Future Features](#futurefeatures)

## Initial Design <a name="initial"></a>
![wireframe](https://user-images.githubusercontent.com/114632709/230495029-5c691af5-6e34-4252-888e-0b722ca12e30.png)
- The initial goal was to create a weather data application with a clean and
beautiful user interface. The challenge was to create one that was 
also interactve and engaging. As the application was being developed, 
the goal became displaying weather data while also providing a more fun 
and unique user experience than most other weather applications. Thus, came
the idea for Weatherbird. 

## Key Features <a name="keyfeatures"></a>
- Search by city: may also specify the country
- Geolocation
- Pin locations
- Toggle between metric and imperial units
- 24-hour and 7-day forecast
- Birdy: A tiny guide to help you use the 
  application
  
![Screen Shot 2023-04-06 at 2 08 43 PM](https://user-images.githubusercontent.com/114632709/230494551-5927a2f6-ebb5-4d0f-90f1-96a8608148d7.png)


## Technologies, APIs <a name="technologies"></a>
Weatherbird was created using the following technologies:
- OpenWeatherMap API: https://openweathermap.org/api
- Webpack and Babel to bundle the source JavaScript code
- npm to manage dependencies

## Code Hightlights <a name="highlights"></a>
```js

function moveBirdy(event) {
    birdy.style.left = (event.pageX) + 'px';
    birdy.style.top = (event.pageY - 50) + 'px';
}

function activateBirdy () {
    document.addEventListener('mousemove', moveBirdy);
}

function deactivateBirdy () {
    document.removeEventListener('mousemove', moveBirdy);
}
```
Weatherbird provides an application guide, in the form of a 
tiny bird that follows the mouse named Birdy. 
However, the user may toggle him on or off as they wish. 

```scss 
.birdy {
    width: 31px;
    height: 32px;
    position: absolute;
    border-radius: 100%;
    z-index: 5;
    background: url("../src/images/birdy.png");
    animation: fly 0.5s steps(8) infinite; 
    transition: 1.5s ease-out;

    p {
        position: absolute;
        bottom: 35px;
        font-size: 1.6em;
        color: rgb(0, 0, 0);
        width: 200px;
        text-align: left;
        font-family: "wendy", sans-serif;
    }
}

@keyframes fly {
    0% {
        background-position: 250px 0;
    }
    100% {
        background-position: 0 0;
    }
}
```
Birdy was created and animated through SCSS. 

## Future Features <a name="futurefeatures"></a>
Some updates that will be added in the future:
- Toggle sound effects that correspond to current weather conditions
- Delete pinned locations directly from the sidebar
- Dark mode

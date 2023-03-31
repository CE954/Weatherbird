## Background
This is a simple weather app that can provide the most up-to-date weather 
information for any given location as well as the user's current location. The 
app will display basic weather data but there will also be an option to display 
a more detailed report. The app's background will animate depending on the 
current weather. 

## Functionality & MVPs
With this weather app (final name TBD), users will be able to: 
- Get a weather report for their current location through geolocation
- Search for other locations
- Toggle between using Celsius and Fahrenheit 
- Be able to star/pin certain locations to a sidebar to compare conditions

## Wireframes
![wireframe](https://user-images.githubusercontent.com/114632709/228934974-734df209-9573-4b2e-90ec-73c66479e434.png)
- The first display that a user sees when first loading the page will only 
contain a search bar and a button to get the user's current location
- Once the user has either searched for a city or clicked the button, the center
card will expand to display the basic weather data. 
- Additionally the user can click a button to display a dropdown menu that 
contains more details as well as a carousel slider to see forecast for the 
next 5 days. 
- There will be a button to open a popup/modal that will display my GitHub and
LinkedIn links

## Technologies, Libaries, APIs
This project will be implemented with the following technologies: 
- OpenWeatherMap API: https://openweathermap.org/api
- Webpack and Babel to bundle the source JavaScript code
- npm to manage dependencies

## Implementation Timeline
- Friday & Weekend: Setup project file structure and make sure webpack works. 
Get comfortable working with OpenWeatherMap API and make sure I can fetch all 
the data I need. Design initial display box (search bar and find location button)
and main display box (basic weather data). Make sure the user gets correct 
weather info by search or by using the find location button.
Also, design the dropdown menu (detailed report). 

- Monday: If I haven't already, I will start working on animating the transitions from 
one display box to the next, as well as making sure the dropdown menu animation 
looks nice. Start working on background animations for different weather 
conditions. Also, start working on location star/pin feature. Work on carousel 
menu in dropdown menu and setup up modal menu.

- Tuesday: Continue working on CSS animations, styling and transitions, making 
sure the site is visually pleasing. Make adjustments to ensure that the site is
responsive and still looks good regardless of the screen size. 

- Wednesday: Make finishing touches to any CSS transitions and styling. Test
and debug.

- Thursday Morning: Upload to GitHub. 

## Bonus features 
- Toggle sound effects that correspond to current weather conditions

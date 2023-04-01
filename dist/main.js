/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import getIcon from './scripts/icon.js';\n\n//API call test\nlet key = \"62b8f696194b27ae3d38708afeb4c3cc\";\nfunction fetchWeather(city) {\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`).then(response => response.json()).then(data => displayWeather(data));\n}\nfunction displayWeather(data) {\n  const {\n    name\n  } = data;\n  const {\n    icon,\n    description\n  } = data.weather[0];\n  const {\n    temp,\n    humidity\n  } = data.main;\n  const {\n    speed\n  } = data.wind;\n  // console.log(name, icon, description, temp, humidity, speed);\n  document.querySelector('.location').innerText = name;\n  document.querySelector(\".temp\").innerText = Math.round(temp) + \"°F\";\n  document.querySelector(\".description\").innerText = capitalize(description);\n  document.querySelector(\".humidity\").innerText = `Humidity: ${humidity}%`;\n  document.querySelector(\".wind\").innerText = `Wind Speed: ${speed} MPH`;\n}\nfunction capitalize(string) {\n  str = string.split(\" \");\n  let newSent = str.map(word => word.charAt(0).toUpperCase() + word.slice(1));\n  return newSent.join(\" \");\n}\nconsole.log(\"Hello World!\");\nwindow.fetchWeather = fetchWeather;\nwindow.displayWeather = displayWeather;\nlet searchForm = document.querySelector(\".search\");\nsearchForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  let input = document.querySelector(\".search-bar\").value;\n  fetchWeather(input);\n  document.querySelector(\".search-bar\").value = \"\";\n});\n\n// let test = document.querySelector(\".image\");\n// let image = document.createElement(\"img\");\n// image.src = '/images/day.svg';\n// test.appendChild(image)\n\n// Error handling example\n// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`)\n//     .then(response => {\n//         if (response.ok) {\n//             return response.json();\n//         } else {\n//             throw new Error(response);\n//         }\n//     })\n//     .then(\n//         data => {\n//             console.log(\"Success!\");\n//             console.log(data);\n//         },\n//         errorResponse => {\n//             console.log(\"Failure!\");\n//             console.log(errorResponse);\n//         }\n//     );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJrZXkiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRpc3BsYXlXZWF0aGVyIiwibmFtZSIsImljb24iLCJkZXNjcmlwdGlvbiIsIndlYXRoZXIiLCJ0ZW1wIiwiaHVtaWRpdHkiLCJtYWluIiwic3BlZWQiLCJ3aW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwiTWF0aCIsInJvdW5kIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsInN0ciIsInNwbGl0IiwibmV3U2VudCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzZWFyY2hGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBnZXRJY29uIGZyb20gJy4vc2NyaXB0cy9pY29uLmpzJztcblxuLy9BUEkgY2FsbCB0ZXN0XG5sZXQga2V5ID0gXCI2MmI4ZjY5NjE5NGIyN2FlM2QzODcwOGFmZWI0YzNjY1wiO1xuXG5mdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9JnVuaXRzPWltcGVyaWFsYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkaXNwbGF5V2VhdGhlcihkYXRhKSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGljb24sIGRlc2NyaXB0aW9uIH0gPSBkYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgeyB0ZW1wLCBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICAgIGNvbnN0IHsgc3BlZWQgfSA9IGRhdGEud2luZDtcbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBpY29uLCBkZXNjcmlwdGlvbiwgdGVtcCwgaHVtaWRpdHksIHNwZWVkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKS5pbm5lclRleHQgPSBuYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRlbXApICsgXCLCsEZcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZGVzY3JpcHRpb24pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIikuaW5uZXJUZXh0ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKS5pbm5lclRleHQgPSBgV2luZCBTcGVlZDogJHtzcGVlZH0gTVBIYDtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHsgXG4gICAgc3RyID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgbmV3U2VudCA9IHN0ci5tYXAod29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5ld1NlbnQuam9pbihcIiBcIik7XG59XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuXG53aW5kb3cuZmV0Y2hXZWF0aGVyID0gZmV0Y2hXZWF0aGVyO1xud2luZG93LmRpc3BsYXlXZWF0aGVyID0gZGlzcGxheVdlYXRoZXI7XG5cbmxldCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpLnZhbHVlO1xuICAgIGZldGNoV2VhdGhlcihpbnB1dCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpLnZhbHVlID0gXCJcIjtcbn0pXG5cbi8vIGxldCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKTtcbi8vIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyBpbWFnZS5zcmMgPSAnL2ltYWdlcy9kYXkuc3ZnJztcbi8vIHRlc3QuYXBwZW5kQ2hpbGQoaW1hZ2UpXG5cbi8vIEVycm9yIGhhbmRsaW5nIGV4YW1wbGVcbi8vIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtpZH1gKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oXG4vLyAgICAgICAgIGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzIVwiKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBlcnJvclJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbHVyZSFcIik7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKTtcbi8vICAgICAgICAgfVxuLy8gICAgICk7XG4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0EsSUFBSUEsR0FBRyxHQUFHLGtDQUFrQztBQUU1QyxTQUFTQyxZQUFZQSxDQUFDQyxJQUFJLEVBQUU7RUFDeEJDLEtBQUssQ0FBRSxxREFBb0RELElBQUssVUFBU0YsR0FBSSxpQkFBZ0IsQ0FBQyxDQUM3RkksSUFBSSxDQUFDQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFJQyxjQUFjLENBQUNELElBQUksQ0FBQyxDQUFDO0FBQ3ZDO0FBRUEsU0FBU0MsY0FBY0EsQ0FBQ0QsSUFBSSxFQUFFO0VBQzFCLE1BQU07SUFBRUU7RUFBSyxDQUFDLEdBQUdGLElBQUk7RUFDckIsTUFBTTtJQUFFRyxJQUFJO0lBQUVDO0VBQVksQ0FBQyxHQUFHSixJQUFJLENBQUNLLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDN0MsTUFBTTtJQUFFQyxJQUFJO0lBQUVDO0VBQVMsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLElBQUk7RUFDcEMsTUFBTTtJQUFFQztFQUFNLENBQUMsR0FBR1QsSUFBSSxDQUFDVSxJQUFJO0VBQzNCO0VBQ0FDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxTQUFTLEdBQUdYLElBQUk7RUFDcERTLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxJQUFJLENBQUMsR0FBRyxJQUFJO0VBQ25FSyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsU0FBUyxHQUFHRyxVQUFVLENBQUNaLFdBQVcsQ0FBQztFQUMxRU8sUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNDLFNBQVMsR0FBSSxhQUFZTixRQUFTLEdBQUU7RUFDeEVJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEdBQUksZUFBY0osS0FBTSxNQUFLO0FBQzFFO0FBRUEsU0FBU08sVUFBVUEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3hCQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUN2QixJQUFJQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csR0FBRyxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDM0UsT0FBT0wsT0FBTyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzVCO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUUzQkMsTUFBTSxDQUFDbkMsWUFBWSxHQUFHQSxZQUFZO0FBQ2xDbUMsTUFBTSxDQUFDNUIsY0FBYyxHQUFHQSxjQUFjO0FBRXRDLElBQUk2QixVQUFVLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFFbERrQixVQUFVLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTQyxLQUFLLEVBQUU7RUFDbERBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0VBQ3RCLElBQUlDLEtBQUssR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDdUIsS0FBSztFQUN2RHpDLFlBQVksQ0FBQ3dDLEtBQUssQ0FBQztFQUNuQnZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDdUIsS0FBSyxHQUFHLEVBQUU7QUFDcEQsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
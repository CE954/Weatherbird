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

eval("//API call test\nlet key = \"62b8f696194b27ae3d38708afeb4c3cc\";\nfunction fetchWeather(city) {\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`).then(response => response.json()).then(data => displayWeather(data));\n}\nfunction displayWeather(data) {\n  const {\n    name\n  } = data;\n  const {\n    icon,\n    description\n  } = data.weather[0];\n  const {\n    temp,\n    humidity\n  } = data.main;\n  const {\n    speed\n  } = data.wind;\n  // console.log(name, icon, description, temp, humidity, speed);\n  document.querySelector('.location').innerText = name;\n  document.querySelector(\".temp\").innerText = Math.round(temp) + \"°F\";\n  document.querySelector(\".description\").innerText = capitalize(description);\n  document.querySelector(\".humidity\").innerText = `Humidity: ${humidity}%`;\n  document.querySelector(\".wind\").innerText = `Wind Speed: ${speed} MPH`;\n}\nfunction capitalize(string) {\n  str = string.split(\" \");\n  let newSent = str.map(word => word.charAt(0).toUpperCase() + word.slice(1));\n  return newSent.join(\" \");\n}\nconsole.log(\"Hello World!\");\nwindow.fetchWeather = fetchWeather;\nwindow.displayWeather = displayWeather;\n\n// Error handling example\n// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`)\n//     .then(response => {\n//         if (response.ok) {\n//             return response.json();\n//         } else {\n//             throw new Error(response);\n//         }\n//     })\n//     .then(\n//         data => {\n//             console.log(\"Success!\");\n//             console.log(data);\n//         },\n//         errorResponse => {\n//             console.log(\"Failure!\");\n//             console.log(errorResponse);\n//         }\n//     );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJrZXkiLCJmZXRjaFdlYXRoZXIiLCJjaXR5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRpc3BsYXlXZWF0aGVyIiwibmFtZSIsImljb24iLCJkZXNjcmlwdGlvbiIsIndlYXRoZXIiLCJ0ZW1wIiwiaHVtaWRpdHkiLCJtYWluIiwic3BlZWQiLCJ3aW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwiTWF0aCIsInJvdW5kIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsInN0ciIsInNwbGl0IiwibmV3U2VudCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BUEkgY2FsbCB0ZXN0XG5sZXQga2V5ID0gXCI2MmI4ZjY5NjE5NGIyN2FlM2QzODcwOGFmZWI0YzNjY1wiO1xuXG5mdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSkge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9JnVuaXRzPWltcGVyaWFsYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkaXNwbGF5V2VhdGhlcihkYXRhKSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGljb24sIGRlc2NyaXB0aW9uIH0gPSBkYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgeyB0ZW1wLCBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICAgIGNvbnN0IHsgc3BlZWQgfSA9IGRhdGEud2luZDtcbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBpY29uLCBkZXNjcmlwdGlvbiwgdGVtcCwgaHVtaWRpdHksIHNwZWVkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKS5pbm5lclRleHQgPSBuYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRlbXApICsgXCLCsEZcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZGVzY3JpcHRpb24pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIikuaW5uZXJUZXh0ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKS5pbm5lclRleHQgPSBgV2luZCBTcGVlZDogJHtzcGVlZH0gTVBIYDtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHsgXG4gICAgc3RyID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgbmV3U2VudCA9IHN0ci5tYXAod29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5ld1NlbnQuam9pbihcIiBcIik7XG59XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuXG53aW5kb3cuZmV0Y2hXZWF0aGVyID0gZmV0Y2hXZWF0aGVyO1xud2luZG93LmRpc3BsYXlXZWF0aGVyID0gZGlzcGxheVdlYXRoZXI7XG5cblxuLy8gRXJyb3IgaGFuZGxpbmcgZXhhbXBsZVxuLy8gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2lkfWApXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbi8vICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSlcbi8vICAgICAudGhlbihcbi8vICAgICAgICAgZGF0YSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhXCIpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGVycm9yUmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsdXJlIVwiKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yUmVzcG9uc2UpO1xuLy8gICAgICAgICB9XG4vLyAgICAgKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxHQUFHLEdBQUcsa0NBQWtDO0FBRTVDLFNBQVNDLFlBQVlBLENBQUNDLElBQUksRUFBRTtFQUN4QkMsS0FBSyxDQUFFLHFEQUFvREQsSUFBSyxVQUFTRixHQUFJLGlCQUFnQixDQUFDLENBQzdGSSxJQUFJLENBQUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxJQUFJLElBQUlDLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7QUFDdkM7QUFFQSxTQUFTQyxjQUFjQSxDQUFDRCxJQUFJLEVBQUU7RUFDMUIsTUFBTTtJQUFFRTtFQUFLLENBQUMsR0FBR0YsSUFBSTtFQUNyQixNQUFNO0lBQUVHLElBQUk7SUFBRUM7RUFBWSxDQUFDLEdBQUdKLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQztFQUM3QyxNQUFNO0lBQUVDLElBQUk7SUFBRUM7RUFBUyxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsSUFBSTtFQUNwQyxNQUFNO0lBQUVDO0VBQU0sQ0FBQyxHQUFHVCxJQUFJLENBQUNVLElBQUk7RUFDM0I7RUFDQUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNDLFNBQVMsR0FBR1gsSUFBSTtFQUNwRFMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNULElBQUksQ0FBQyxHQUFHLElBQUk7RUFDbkVLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdHLFVBQVUsQ0FBQ1osV0FBVyxDQUFDO0VBQzFFTyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLGFBQVlOLFFBQVMsR0FBRTtFQUN4RUksUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsR0FBSSxlQUFjSixLQUFNLE1BQUs7QUFDMUU7QUFFQSxTQUFTTyxVQUFVQSxDQUFDQyxNQUFNLEVBQUU7RUFDeEJDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ3ZCLElBQUlDLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxHQUFHLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzRSxPQUFPTCxPQUFPLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDNUI7QUFFQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBRTNCQyxNQUFNLENBQUNuQyxZQUFZLEdBQUdBLFlBQVk7QUFDbENtQyxNQUFNLENBQUM1QixjQUFjLEdBQUdBLGNBQWM7O0FBR3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
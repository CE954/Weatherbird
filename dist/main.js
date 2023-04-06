!function(){"use strict";!function(){const e=document.querySelector(".background");function t(e){switch(e){case"01d":return"./src/images/day.svg";case"02d":return"./src/images/cloudy-day-1.svg";case"03d":return"./src/images/cloudy-day-2.svg";case"04d":case"50d":return"./src/images/cloudy.svg";case"09d":return"./src/images/rainy-4.svg";case"10d":return"./src/images/rainy-6.svg";case"11d":return"./src/images/thunder.svg";case"13d":return"./src/images/snowy-6.svg"}}function n(e){switch(e){case"01n":return"./src/images/night.svg";case"02n":case"03n":case"04n":return"./src/images/cloudy-night-1.svg";case"09n":return"./src/images/rainy-4.svg";case"10n":return"./src/images/rainy-6.svg";case"11n":return"./src/images/thunder.svg";case"13n":return"./src/images/snowy-6.svg";case"50n":return"./src/images/cloudy.svg"}}const s=document.querySelector(".favorites-menu"),o=document.querySelector(".burger"),r=[],c=document.querySelector(".pin");function i(e){for(let t=0;t<r.length;t++)if(r[t][0]===e)return!0;return!1}function a(){for(let e=0;e<r.length;e++){let t=r[e][0].split(" ").join("-");if(!document.querySelector(`.${t}`)){let n=document.createElement("div");n.classList.add(`${t}`),n.innerHTML="",n.innerHTML+=`\n                <div class="pinned-location_name">${r[e][0]}</div>\n                <div class="pinned-location_icon"><img src="${r[e][1]}" class="pinned-icon" id="${t}"></div>\n                <div class="pinned-location_temp">${r[e][2]}</div>\n            `,document.querySelector(".favorites-menu nav").appendChild(n)}}}window.displayPinnedLocations=a,window.favorites=r;const l=document.querySelector(".empty-message");function d(){0===r.length?l.style.display="block":l.style.display="none"}const u=["imperial","metric"];let y=u[0];function m(){return y=y===u[0]?u[1]:u[0],y}function p(){return"imperial"===y?"°F":"°C"}window.unitSwitch=m;const g="62b8f696194b27ae3d38708afeb4c3cc";function h(e,s){fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e}&lon=${s}&appid=${g}&units=${y}`).then((e=>e.json())).then((e=>{"404"!==e.cod?(function(e){let s=document.querySelector(".hours");for(let o=0;o<=23;o++){let r=document.createElement("div");r.classList.add("hour");let c=Math.round(e.hourly[o].temp),i=e.hourly[o].weather[0].icon,a="";a=i.includes("d")?t(i):n(i);let l=v(new Date(1e3*e.hourly[o].dt).getHours());r.innerHTML="",r.innerHTML+=`\n            <div class="hour_time">${l}</div>\n            <div class="hour_icon"><img src=${a} alt="weather icon"></div>\n            <div class="hour_temp">${c} ${p()}</div>\n        `,s.appendChild(r)}}(e),f(e)):console.log("error")}))}function v(e){return e>12?e-12+"pm":0===e?"12am":`${e}am`}window.getForecast=h,window.displayDailyForecast=f,window.deleteForecast=S;const L=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function f(e){let s=document.querySelector(".days");for(let o=0;o<=6;o++){let r=document.createElement("div");r.classList.add("day");let c=Math.round(e.daily[o].temp.min),i=Math.round(e.daily[o].temp.max),a=e.daily[o].weather[0].icon,l="";l=a.includes("d")?t(a):n(a);let d=new Date(1e3*e.daily[o].dt);r.innerHTML="",r.innerHTML+=`\n            <div class="day_name">${L[d.getDay()]}</div>\n            <div class="day_icon"><img src=${l} alt="weather icon"></div>\n            <div class="day_temp">${c} - ${i} ${p()}</div>\n            <div class="day_desc">${b(e.daily[o].weather[0].description)}</div>\n        `,s.appendChild(r)}}function S(){document.querySelector(".days").innerHTML=""}function b(e){return e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}const k=document.querySelector(".birdy"),T=document.querySelector(".birdy p");function q(){setTimeout((()=>{T.innerHTML=""}),2500)}document.addEventListener("DOMContentLoaded",(function(){T.innerHTML="Hey there!",setTimeout((()=>{T.innerHTML="I'm here to help you find the weather!",setTimeout((()=>{T.innerHTML="Just type in a location and I'll do the rest!",setTimeout((()=>{T.innerHTML="Use this format! (City, Country) or (City)",setTimeout((()=>{T.innerHTML="Or, you can use your current location!",setTimeout((()=>{T.innerHTML="I'll probably forget who you are because there's no cookies yet!",setTimeout((()=>{T.innerHTML="But, I hope you have a good time!",q()}),2500)}),2500)}),2500)}),2500)}),2500)}),2500)}),{once:!0}),document.querySelector("#geo-search").addEventListener("mouseover",(()=>{T.innerHTML="Click here to use your current location!",q()}),{once:!0}),document.querySelector(".refresh").addEventListener("mouseover",(()=>{T.innerHTML="Click here to refresh the data!",q()}),{once:!0}),document.querySelector(".pin").addEventListener("mouseover",(()=>{T.innerHTML="Click here to pin or unpin the location!",q()}),{once:!0});let w=document.querySelector("#birdy-toggle");function $(e){k.style.left=e.pageX+"px",k.style.top=e.pageY-50+"px"}function M(){document.addEventListener("mousemove",$)}w.addEventListener("mouseover",(()=>{T.innerHTML="If you don't like me, you can turn me off!",q()}),{once:!0}),w.addEventListener("change",(function(){"none"===k.style.display?(k.style.display="block",T.innerHTML="I'm back!",q(),M()):(k.style.display="none",q(),document.removeEventListener("mousemove",$))})),document.addEventListener("DOMContentLoaded",M,{once:!0});const C=document.querySelector(".search-bar"),H=document.querySelector(".details"),E=document.querySelector(".details-2"),x=document.querySelector("#geo-search"),I=document.querySelector(".image img"),D=document.querySelector(".search"),_=document.querySelector(".loader"),j=document.querySelector(".pin"),F=document.querySelector(".refresh");function N(e){F.style.display="none",_.style.display="block",fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${g}&units=${y}`).then((e=>e.json())).then((e=>{"404"!==e.cod?(document.querySelector(".hours").innerHTML="",S(),document.querySelector(".weather").classList.add("fadeIn"),I.classList.add("fadeIn"),document.querySelector(".card").style.height="350px",C.style.border="1px solid #ccc",C.classList.remove("shake"),document.querySelector("#body").style.height="3000px",R(e),H.classList.add("fadeIn"),H.style.display="block",E.classList.add("fadeIn"),E.style.display="block",x.style.marginTop="4px",_.style.display="none",F.style.display="block",j.classList.add("fadeIn"),h(e.coord.lat,e.coord.lon),setTimeout((()=>{!function(){let e=document.querySelector(".location"),t=document.querySelector(".description"),n=document.querySelector(".wind"),s=document.querySelector(".hour div:first-child");n="imperial"===y&&n.innerText.split(" ")[2]>20||"metric"===y&&parseInt(n.innerText.split(" ")[2])>9?"windy":"not windy";let o=function(){let e=document.querySelector(".temp"),t=parseInt(e.textContent.split("°")[0]);if("imperial"===y)switch(!0){case t<=32:return"cold as $#!#";case t>32&&t<=50:return"chilly";case t>50&&t<=70:return"cool";case t>70&&t<=90:return"hot";case t>90:return"hot as !$!#"}else switch(!0){case t<=0:return"cold as $#!#";case t>0&&t<=10:return"chilly";case t>10&&t<=20:return"cool";case t>20&&t<=32:return"hot";case t>=40:return"hot as !$!#"}}(),r=t.textContent.split(" ").map((e=>e.charAt(0).toLowerCase()+e.slice(1))).join(" "),c=s.textContent.includes("pm")?"evening":"morning";T.textContent=`It's ${o} in ${e.textContent} this ${c}!`,setTimeout((()=>{T.textContent=`We've got ${r} and it's ${n}!`,"windy"===n?setTimeout((()=>{T.textContent="I'd bring a jacket!",q()}),2500):q()}),2500)}()}),2500)):(C.classList.add("shake"),C.style.border="1px solid #cc0505",C.placeholder="City not found",_.style.display="none",F.style.display="block")}))}function R(s){const{name:o}=s,{speed:r}=s.wind,{icon:c,description:a}=s.weather[0],{temp:l,humidity:d}=s.main;document.querySelector(".location").innerText=o,document.querySelector(".temp").innerText=Math.round(l)+`${p()}`,document.querySelector(".description").innerText=b(a),document.querySelector(".humidity").innerText=`Humidity: ${d}%`,document.querySelector(".wind").innerText=`Wind Speed: ${r} ${"imperial"===y?"MPH":"M/S"}`,c.includes("d")?(I.src=t(c),function(t){switch(document.querySelector(".title").style.color="black",document.querySelector(".birdy p").style.color="black",t){case"01d":e.style.background="url(./src/images/ClearSky.svg)";case"02d":e.style.background="url(./src/images/FewClouds.svg)";case"03d":e.style.background="url(./src/images/ScatteredClouds.svg)";case"04d":e.style.background="url(./src/images/BrokenClouds.svg)";case"09d":e.style.background="url(./src/images/RainDay.svg)";case"10d":e.style.background="url(./src/images/RainDay.svg)";case"11d":e.style.background="url(./src/images/Thunderstorm.svg)";case"13d":e.style.background="url(./src/images/SnowDay.svg)";case"50d":e.style.background="url(./src/images/BrokenClouds.svg)"}}(c),I.style.display="block"):(I.src=n(c),function(t){switch(document.querySelector(".title").style.color="white",document.querySelector(".birdy p").style.color="white",t){case"01n":e.style.background="url(./src/images/ClearNightSky.svg)";case"02n":e.style.background="url(./src/images/FewCloudsNight.svg)";case"03n":e.style.background="url(./src/images/ScatteredCloudsNight.svg)";case"04n":e.style.background="url(./src/images/BrokenCloudsNight.svg)";case"09n":e.style.background="url(./src/images/RainNight.svg)";case"10n":e.style.background="url(./src/images/RainNight.svg)";case"11n":e.style.background="url(./src/images/Thunderstorm.svg)";case"13n":e.style.background="url(./src/images/SnowNight.svg)";case"50n":e.style.background="url(./src/images/BrokenCloudsNight.svg)"}}(c),I.style.display="block"),i(o)?(j.classList.remove("unpinned"),j.classList.add("pinned")):(j.classList.remove("pinned"),j.classList.add("unpinned"))}d(),window.fetchWeather=N,window.displayWeather=R,D.addEventListener("submit",(function(e){e.preventDefault();let t=document.querySelector(".search-bar").value;""!==C.value&&(N(t),C.value="",C.placeholder="Enter a location")}));const B={enableHighAccuracy:!0,timeout:5e3};function W(e){let t=e.coords.latitude,n=e.coords.longitude;fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&appid=${g}&units=imperial`).then((e=>e.json())).then((e=>(C.placeholder="Enter a location",_.style.display="none",N(e.name))))}function A(e){console.warn(`ERROR(${e.code}): ${e.message}`),_.style.display="none",1===e.code?(C.classList.add("shake"),C.style.border="1px solid #cc0505",C.placeholder="Location access denied"):2===e.code?(C.placeholder="Can't find location",C.classList.add("shake"),C.style.border="1px solid #cc0505"):3===e.code&&(C.placeholder="Location request timed out",C.classList.add("shake"),C.style.border="1px solid #cc0505")}x.addEventListener("click",(function(e){C.placeholder="Finding location...",F.style.display="none",_.style.display="block",navigator.geolocation.getCurrentPosition(W,A,B)})),document.querySelector(".details-button").addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".details").scrollIntoView({behavior:"smooth",block:"center"})})),document.querySelector(".burger").addEventListener("click",(function(){s.classList.contains("open")?(s.classList.remove("open"),o.style.background="url(./src/images/burger.svg)"):(s.classList.add("open"),o.style.background="url(./src/images/close.svg)")})),j.addEventListener("click",(function(){let e=document.querySelector(".location").innerHTML,t=document.querySelector(".image img").src,n=document.querySelector(".temp").innerHTML;i(e)&&0!==r.length?(function(e){let t=e.split(" ").join("-"),n=document.querySelector(`.${t}`);for(;n.firstChild;)n.removeChild(n.firstChild);n.remove()}(e),function(e){for(let t=0;t<r.length;t++)r[t][0]===e&&(r.splice(t,1),c.classList.remove("pinned"),c.classList.add("unpinned"))}(e)):(r.push([e,t,n]),a(),c.classList.remove("unpinned"),c.classList.add("pinned"))})),j.addEventListener("click",d);const O=document.querySelector(".hours"),P=document.querySelector(".days");O.addEventListener("wheel",(function(e){e.preventDefault(),O.scrollLeft+=e.deltaY})),P.addEventListener("wheel",(function(e){e.preventDefault(),P.scrollLeft+=e.deltaY}));const Y=document.querySelector("#unit-toggle input");Y.addEventListener("change",m);const U=document.querySelector(".unit-message");Y.addEventListener("change",(function(){"Fahrenheit"===U.innerHTML?(U.style.display="block",U.innerHTML="Celsius",setTimeout((()=>{U.style.display="none"}),2e3)):(U.innerHTML="Fahrenheit",U.style.display="block",setTimeout((()=>{U.style.display="none"}),2e3))})),Y.addEventListener("change",(function(){T.innerHTML="Please refresh the data after changing units!",q()}),{once:!0}),F.addEventListener("click",(function(e){if(e.preventDefault(),""===document.querySelector(".location").innerText)return C.classList.add("shake"),void setTimeout((()=>{C.classList.remove("shake")}),500);N(document.querySelector(".location").innerText),document.querySelectorAll(".pinned-location_temp").forEach((e=>{if(!e.innerHTML.includes(p()))if(e.innerHTML.includes("°C")){let t=parseInt(e.innerHTML.split(" ")[0]),n=Math.round(9*t/5+32);e.innerHTML=`${n} °F`}else{let t=parseInt(e.innerHTML.split(" ")[0]),n=Math.round(5*(t-32)/9);e.innerHTML=`${n} °C`}}))})),document.addEventListener("click",(function(e){let t=e.target;t.classList.contains("pinned-location_name")?N(t.innerText):t.classList.contains("pinned-location_icon")||t.classList.contains("pinned-location_temp")?N(t.parentElement.className.split("-").join(" ")):t.classList.contains("pinned-icon")&&(console.log(t.id.split("-").join(" ")),N(t.id.split("-").join(" ")))}))}()}();
//# sourceMappingURL=main.js.map
import {getUnitSymbol} from './unitSwitch.js';

export function changePinnedUnits() {
    const pinnedUnits = document.querySelectorAll('.pinned-location_temp');
    pinnedUnits.forEach(temp => {
        if (!temp.innerHTML.includes(getUnitSymbol())) {
            if (temp.innerHTML.includes('°C')) {
                let num = parseInt(temp.innerHTML.split(" ")[0]);
                let fahrenheit = Math.round((num * 9/5) + 32);
                temp.innerHTML = `${fahrenheit} °F`;
            } else {
                let num = parseInt(temp.innerHTML.split(" ")[0]);
                let celsius = Math.round((num - 32) * 5/9);
                temp.innerHTML = `${celsius} °C`;
            }
        }
    })
}
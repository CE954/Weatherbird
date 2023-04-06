const units = ["imperial", "metric"];
let currentUnit = units[0];

export function unitSwitch() { 
    if (currentUnit === units[0]) {
        currentUnit = units[1];
    } else {
        currentUnit = units[0];
    }
    return currentUnit;
}

export function getUnitSymbol() {
    if (currentUnit === "imperial") {
        return "°F";
    } else {
        return "°C";
    }
}

export {currentUnit}
window.unitSwitch = unitSwitch;
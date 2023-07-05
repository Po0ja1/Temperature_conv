function convertTemperature() {
var temperatureInput = document.getElementById("temp").value;
var fromUnitInput = document.getElementById("uni").value;
var toUnitInput = document.getElementById("touni").value;
    var result;
    
    if (fromUnitInput === "celsius") {
      if (toUnitInput === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
      } else if (toUnitInput === "kelvin") {
        result = parseFloat(temperatureInput) + 273.15;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnitInput === "fahrenheit") {
      if (toUnitInput === "celsius") {
        result = (temperatureInput - 32) * 5/9;
      } else if (toUnitInput === "kelvin") {
        result = (parseFloat(temperatureInput) + 459.67) * 5/9;
      } else {
        result = temperatureInput;
      }
    } else if (fromUnitInput === "kelvin") {
      if (toUnitInput === "celsius") {
        result = parseFloat(temperatureInput) - 273.15;
      } else if (toUnitInput === "fahrenheit") {
        result = (parseFloat(temperatureInput) * 9/5) - 459.67;
      } else {
        result = temperatureInput;
      }
    }
    document.getElementById("result").textContent = result.toFixed(2);
  }
  
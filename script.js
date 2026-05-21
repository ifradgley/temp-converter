let unit = document.getElementById("unit");
let inputDegrees = document.getElementById("degrees");
let dropDown = document.getElementById("type");
let paragraph = document.getElementById("result");
let button = document.getElementById("btn-convert");
let result;

dropDown.addEventListener("change", (event) => {
  if (event.target.value === "celsius") {
    unit.textContent = "°F";
  } else {
    unit.textContent = "°C";
  }
});

button.addEventListener("click", function () {
  let userInput = inputDegrees.value;
  let selectedType = dropDown.value;
  if (selectedType === "celsius") {
    result = convertToFahrenheit(userInput);
  } else {
    result = convertToCelsius(userInput);
  }
  paragraph.textContent = result;
  if (selectedType === "celsius") {
    unit.textContent = "°F";
  } else {
    unit.textContent = "°C";
  }
});

const convertToCelsius = function (x) {
  let Celsius = Math.round(((x - 32) * 10 * 5) / 9) / 10;
  return Celsius;
};

const convertToFahrenheit = function (x) {
  let Fahrenheit = Math.round(((x * 9) / 5 + 32) * 10) / 10;
  return Fahrenheit;
};

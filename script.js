let inputDegrees = document.getElementById("degrees");
let dropDown = document.getElementById("type");
let paragraph = document.getElementById("result");
let button = document.getElementById("btn-convert");
let result;

button.addEventListener("click", function () {
  let userInput = inputDegrees.value;
  let selectedType = dropDown.value;
  if (selectedType === "celsius") {
    result = convertToFahrenheit(userInput);
  } else {
    result = convertToCelsius(userInput);
  }
  paragraph.textContent = result;
});

const convertToCelsius = function (x) {
  let Celsius = Math.round(((x - 32) * 10 * 5) / 9) / 10;
  return Celsius;
};

const convertToFahrenheit = function (x) {
  let Fahrenheit = Math.round(((x * 9) / 5 + 32) * 10) / 10;
  return Fahrenheit;
};

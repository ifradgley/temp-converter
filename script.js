let inputCelsius = document.getElementById("input-celsius");
let btnCelsius = document.getElementById("btn-celsius");
let resultCelsius = document.getElementById("result-celsius");

btnCelsius.addEventListener("click", function () {
  let userInput = inputCelsius.value;
  let result = convertToCelsius(userInput);
  resultCelsius.textContent = result;
});

let inputFahrenheit = document.getElementById("input-fahrenheit");
let btnFahrenheit = document.getElementById("btn-fahrenheit");
let resultFahrenheit = document.getElementById("result-fahrenheit");

btnFahrenheit.addEventListener("click", function () {
  let userInput = inputFahrenheit.value;
  let result = convertToFahrenheit(userInput);
  resultFahrenheit.textContent = result;
});

const convertToCelsius = function (x) {
  let Celsius = Math.round(((x - 32) * 10 * 5) / 9) / 10;
  return Celsius;
};

const convertToFahrenheit = function (x) {
  let Fahrenheit = Math.round(((x * 9) / 5 + 32) * 10) / 10;
  return Fahrenheit;
};

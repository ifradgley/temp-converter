let unit = document.getElementById("unit");
let inputDegrees = document.getElementById("degrees");
let dropDown = document.getElementById("type");
let paragraph = document.getElementById("result");
let reset = document.getElementById("btn-reset");
let result;

function textChange(selectedType) {
  if (selectedType === "celsius") {
    unit.textContent = "°F";
  } else {
    unit.textContent = "°C";
  }
}

dropDown.addEventListener("change", (event) => {
  textChange(event.target.value);
});
inputDegrees.addEventListener("input", () => {
  let userInput = inputDegrees.value;
  let selectedType = dropDown.value;
  if (selectedType === "celsius") {
    result = convertToFahrenheit(userInput);
  } else {
    result = convertToCelsius(userInput);
  }
  paragraph.textContent = result;
  textChange(selectedType);
});

reset.addEventListener("click", function () {
  inputDegrees.value = "";
  paragraph.textContent = "";
  unit.textContent = "";
});

const convertToCelsius = function (x) {
  let Celsius = Math.round(((x - 32) * 10 * 5) / 9) / 10;
  return Celsius;
};

const convertToFahrenheit = function (x) {
  let Fahrenheit = Math.round(((x * 9) / 5 + 32) * 10) / 10;
  return Fahrenheit;
};

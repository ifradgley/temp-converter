const convertToCelsius = function(x) {
  let Celsius = Math.round((x-32) * 10 * 5/9) / 10
    return Celsius

};

const convertToFahrenheit = function(x) {
  let Fahrenheit = Math.round(((x * 9/5) + 32) * 10) / 10
    return Fahrenheit
  
};

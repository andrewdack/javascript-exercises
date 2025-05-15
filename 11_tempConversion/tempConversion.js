const convertToCelsius = function(degreesInFahrenheit) {
  let conversionDecimal = (5/9) * (degreesInFahrenheit - 32);
  return Number(conversionDecimal.toFixed(1));
};

const convertToFahrenheit = function(degreesInCelsius) {
  let conversionDecimal = (degreesInCelsius * (9/5)) + 32;
  return Number(conversionDecimal.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

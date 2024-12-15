const convertToCelsius = function(temp) {
  const conv = Math.round(((temp - 32) * (5/9)) * 10) / 10;
  return conv;

};

const convertToFahrenheit = function(temp) {
  const conv = Math.round((temp * (9/5) + 32) * 10) / 10;
  return conv;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

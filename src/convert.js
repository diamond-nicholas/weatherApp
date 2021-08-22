const convertToCelcius = (numbs) => {
  numbs = numbs - 273.15;
  return Math.round(numbs * 10) / 10;
};

const convertToFahrenheit = (num) => {
  num = ((num - 273.15) * 9) / 5 + 32;
  return Math.round(num * 10) / 10;
};

export { convertToCelcius, convertToFahrenheit };

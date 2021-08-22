/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import * as myDom from './dom';
import * as convert from './convert';
import * as utilis from './utility';
import './styles.css';

function UserInput(topic) {
  this.topic = topic;
}

myDom.userLocationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // const userData = myDom.userLocation.value;
  // const listValue = new UserInput(userData);
  // myDom.totalList.push(listValue.topic);
  utilis.saveAndRender();
  utilis.toggleBackground();
  utilis.clearData();
});

export const render = () => {
  const userData = myDom.userLocation.value;
  const listValue = new UserInput(userData);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${listValue.topic}&APPID=${myDom.TOKEN}`,
    {
      mode: 'cors',
    },
  )
    .then((response) => response.json())
    .then((response) => {
      const mainTemp = response.main.temp;
      const { humidity } = response.main;
      myDom.tempDisplay.innerHTML = `
      <h4 class="card-title text-center text-info location_title">${listValue.topic}</h4>
              <p class="card-text text-center cur-temp">Current Temp: ${mainTemp} kelvin </p>
              <p class="card-text text-center hum">Humidity: ${humidity}%</p>
      `;
      myDom.checkConverter.addEventListener('click', () => {
        if (myDom.checkConverter.checked) {
          myDom.tempDisplay.innerHTML = `
      <h4 class="card-title text-center location_title2">${listValue.topic}</h4>
              <p class="card-text text-center cur-temp2">Current Temp: ${convert.convertToFahrenheit(
    mainTemp,
  )} °F</p>
              <p class="card-text text-center hum2">Humidity: ${humidity}%</p>
      `;
        } else {
          myDom.tempDisplay.innerHTML = `
      <h4 class="card-title text-center location_title3">${listValue.topic}</h4>
              <p class="card-text text-center cur-temp3">Current Temp: ${convert.convertToCelcius(
    mainTemp,
  )} °C </p>
              <p class="card-text text-center hum3">Humidity: ${humidity}%</p>
      `;
        }
      });

      myDom.figuresContainer.appendChild(myDom.tempDisplay);
      myDom.totalList.push(`${convert.convertToCelcius(mainTemp)}`);
    });
};

const giphyGif = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=0tIDbu31Br8aCF7DovZhOoszMrUM5DG1&s=weather',
    { mode: 'cors' },
  )
    .then((response) => response.json())
    .then(() => {
      const myNum = (num) => {
        if (num > 20) {
          myDom.imgApi.src = 'https://media.giphy.com/media/26gs87YcoCMeQFMcw/giphy.gif?cid=ecf05e47xbb8yubujlf97nuldsq14s00gzym3mizev44y7mf&rid=giphy.gif&ct=g';
        } else if (num < 20) {
          myDom.imgApi.src = 'https://media.giphy.com/media/3osxYzIQRqN4DOEddC/giphy.gif?cid=ecf05e471poty2ap9c1g0a63i3mfbjpuwv7r2bpyip9aiw8k&rid=giphy.gif&ct=g';
        }
      };

      myDom.totalList.forEach(myNum);
    });
};
giphyGif();

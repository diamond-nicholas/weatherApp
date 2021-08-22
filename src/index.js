import * as myToken from './token';
import * as myDom from './dom';
import * as convert from './convert';
import * as utilis from './utility';
import './styles.css';

myDom.userLocationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userData = myDom.userLocation.value;
  const listValue = new UserInput(userData);
  myDom.totalList.push(listValue.topic);
  utilis.saveAndRender();
  utilis.clearData();
});

export const render = () => {
  const userData = myDom.userLocation.value;
  const listValue = new UserInput(userData);
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${listValue.topic}&APPID=${myToken.TOKEN}`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const mainTemp = response.main.temp;
      const humidity = response.main.humidity;
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
                mainTemp
              )} °F</p>
              <p class="card-text text-center hum2">Humidity: ${humidity}%</p>
      `;
        } else {
          myDom.tempDisplay.innerHTML = `
      <h4 class="card-title text-center location_title3">${listValue.topic}</h4>
              <p class="card-text text-center cur-temp3">Current Temp: ${convert.convertToCelcius(
                mainTemp
              )} °C </p>
              <p class="card-text text-center hum3">Humidity: ${humidity}%</p>
      `;
        }
      });

      myDom.figuresContainer.appendChild(myDom.tempDisplay);
    });
};

function UserInput(topic) {
  this.topic = topic;
}

const giphyGif = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=0tIDbu31Br8aCF7DovZhOoszMrUM5DG1&s=',
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      myDom.imgApi.src =
        'https://media.giphy.com/media/Tp8f13yfSadR2XMJof/giphy.gif?cid=ecf05e47okvuo2qzxbwwoofgbhj53xwxwvlzj1yhk38reg25&rid=giphy.gif&ct=g';
    });
};
giphyGif();

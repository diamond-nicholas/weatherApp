import * as myToken from './token';
const userLocation = document.querySelector('.user_input');
const userLocationForm = document.querySelector('.user_location_form');
const tempDisplay = document.querySelector('.tempFigures');
const figuresContainer = document.querySelector('.figures-container');

const LOCAL_STORAGE_KEY = 'task.totalList';
const imgApi = document.querySelector('.giphy');
const checkConverter = document.querySelector('.form-check-input');

let totalList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

userLocationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userData = userLocation.value;
  const listValue = new UserInput(userData);
  totalList.push(listValue.topic);
  saveAndRender();
  clearData();
});

const saveAndRender = () => {
  saveToLocal();
  render();
};

const render = () => {
  const userData = userLocation.value;
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
      tempDisplay.innerHTML = `
      <h4 class="card-title text-center">${listValue.topic}</h4>
              <p class="card-text text-center">Current Temp: ${mainTemp} kelvin </p>
              <p class="card-text text-center">Humidity: ${humidity}%</p>
      `;
      checkConverter.addEventListener('click', () => {
        if (checkConverter.checked) {
          tempDisplay.innerHTML = `
      <h4 class="card-title text-center">${listValue.topic}</h4>
              <p class="card-text text-center">Current: ${convertToFahrenheit(
                mainTemp
              )} °F</p>
              <p class="card-text text-center">Humidity: ${humidity}%</p>
      `;
        } else {
          tempDisplay.innerHTML = `
      <h4 class="card-title text-center">${listValue.topic}</h4>
              <p class="card-text text-center">Current: ${convertToCelcius(
                mainTemp
              )} °C </p>
              <p class="card-text text-center">Humidity: ${humidity}%</p>
      `;
        }
      });

      figuresContainer.appendChild(tempDisplay);
    });
};

const clearData = () => {
  userLocation.value = '';
};

const saveToLocal = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(totalList));
};

function UserInput(topic) {
  this.topic = topic;
}

const convertToCelcius = (numbs) => {
  numbs = numbs - 273.15;
  return Math.round(numbs * 10) / 10;
};

const convertToFahrenheit = (num) => {
  num = ((num - 273.15) * 9) / 5 + 32;
  return Math.round(num * 10) / 10;
};

const giphyGif = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=0tIDbu31Br8aCF7DovZhOoszMrUM5DG1&s=snow',
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      imgApi.src = response.data.images.original.url;
    });
};
giphyGif();

import * as myToken from './token'
const userLocation = document.querySelector('.user_input')
const userLocationForm = document.querySelector('.user_location_form')
const tempDisplay = document.querySelector('.tempFigures')
const figuresContainer = document.querySelector('.figures-container')
userLocationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const userData = userLocation.value
  userData
  clearData()
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userData}&APPID=${myToken.TOKEN}`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log(response)
      const mainTemp = response.main.temp
      const maxTemp = response.main.temp_max
      const minTemp = response.main.temp_min
      const feelsLike = response.main.feels_like
      const humidity = response.main.humidity
      tempDisplay.innerHTML = `
      <h4 class="card-title text-center">${userData}, ${response.sys.country}</h4>
              <p class="card-text text-center">Current:${mainTemp}</p>
              <p class="card-text text-center">Maximum:${maxTemp}</p>
              <p class="card-text text-center">Minimum:${minTemp}</p>
              <p class="card-text text-center">Feels Like:${feelsLike}</p>
              <p class="card-text text-center">Humidity:${humidity}</p>
      `
      figuresContainer.appendChild(tempDisplay)
    })
})

const clearData = () => {
  userLocation.value = ''
}

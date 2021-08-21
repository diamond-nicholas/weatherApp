const userLocation = document.querySelector('.user_input')
const userLocationForm = document.querySelector('.user_location_form')

userLocationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const userData = userLocation.value
  userData
  clearData()
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userData}&APPID=0cf445a88889f0cf5a9d5efd11501067`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log(response)
    })
})

const clearData = () => {
  userLocation.value = ''
}

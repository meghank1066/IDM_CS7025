const locationInput = document.getElementById("location-input");
const searchLocBtn = document.getElementById("search-loc-btn");
const weatherResult = document.getElementById("weather-result");

const api = '4b2a85e7065d51b1963accee080afc6b';

searchLocBtn.addEventListener("click", getWeather);

function getWeather() {
  const location = locationInput.value.trim();

  if(!location) 
  {
    weatherResult.textContent = "Please enter a location";
    return;
  }

  weatherResult.textContent = "Loading...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=${api}`)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;

        weatherResult.innerHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${description}</p>
        `;
    })
}
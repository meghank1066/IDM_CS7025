const locationInput = document.getElementById("location-input");
const searchLocBtn = document.getElementById("search-loc-btn");
const weatherResult = document.getElementById("weather-result");
const cuteGif = document.getElementById("cuteGif"); // adding gif

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
  cuteGif.style.display = "none"; // hide gif while loading

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=${api}`)
    .then(response => response.json())
    .then(data => {
      //error handling
      if(!data || data.cod !== 200) {
        weatherResult.textContent = "Uh oh! your location is not found. please retry.";
        cuteGif.style.display = "none"; // hide gif if location not found
        return;
      }
      const cityName = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000).toLocaleTimeString("en-GB", { timeZone: "UTC", hour: "2-digit", minute: "2-digit"});
      const sunset = new Date((data.sys.sunset + data.timezone) * 1000).toLocaleTimeString("en-GB", { timeZone: "UTC", hour: "2-digit", minute: "2-digit"});
      const feelsLike = data.main.feels_like;


        weatherResult.innerHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${description}</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
        <p>Feels Like: ${feelsLike}°C</p>
        `;
    })
    .catch(error => {
      weatherResult.textContent = "An error occurred while fetching weather data.";
      cuteGif.style.display = "none";
    })
}

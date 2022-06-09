const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.querySelector('#searchResult');
    searchResult.classList.add('active');

    const cityName = document.querySelector('#cityName');
    const skyState = document.querySelector('#skyState');
    const temperature = document.querySelector('#temperature');
    const feelsLike = document.querySelector('#feelsLike');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');

    cityName.textContent = `${weatherData.cityName}`;
    skyState.textContent = `Weather: ${weatherData.skyState}`;
    temperature.textContent = `Temperature: ${Math.round(weatherData.temperature)} °C`;
    feelsLike.textContent = `Feels like: ${Math.round(weatherData.feelsLike)} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity}%`;
    wind.textContent = `Wind Speed: ${weatherData.wind} km / h`;
  }

  return { setSearchResult };
})();

export default view;
const weather = (() => {
  function convertData(data) {
    const {
      name: cityName,
      weather: [{ main: skyState }],
      main: { temp: temperature, feels_like: feelsLike, humidity: humidity },
      wind: { speed: wind}
    } = data;
    return { cityName, skyState, temperature, feelsLike, humidity, wind };
  }

  async function getData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=164985c3201fb79f6f4b87566abfd608`,
        { mode: 'cors' }
      );
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;

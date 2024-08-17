const input = document.querySelector("#city-name");
const searchButton = document.querySelector("#search-button");
const temperature = document.querySelector("#temperature");
const sky = document.querySelector("#sky");
const wind = document.querySelector("#wind");
getData = async (cityName) => {
  const URL = `https://goweather.herokuapp.com/weather/${cityName}`;
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};
searchButton.addEventListener("click", async () => {
  const cityName = input.value;
  let result = await getData(cityName);
  temperature.innerText = `Temperature:${result.temperature}`;
  sky.innerText = `Forecast:${result.description}`;
  wind.innerText = `Wind:${result.wind}`;
});

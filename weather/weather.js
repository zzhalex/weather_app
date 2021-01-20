const validator = require("validator");
const axios = require("axios");
const appid = process.env.weatherApi;
const url = "http://api.openweathermap.org/data/2.5/weather";

function checkInput(input) {
  // should do more about the input check
  return !validator.isEmpty(input);
}

function convertTemp(data) {
  return Math.ceil(data - 273.15);
}

function getData(data) {
  return {
    temp: convertTemp(data.main.temp) + " °C",
    city: data.name,
    weather: data.weather[0].main,
    des: data.weather[0].description,
    tempRange:
      convertTemp(data.main.temp_min) +
      " °C" +
      " / " +
      convertTemp(data.main.temp_max) +
      " °C",
    humidity: data.main.humidity + "%",
    icon: data.weather[0].icon,
  };
}

async function getWeather(city) {
  try {
    console.log("function getWeather");
    const response = await axios.get(url, {
      params: {
        q: city,
        appid: appid,
      },
    });
    console.log(response.data);
    return getData(response.data);
  } catch (error) {
    throw error;
  }
}

module.exports = { checkInput, getWeather, getData, convertTemp };

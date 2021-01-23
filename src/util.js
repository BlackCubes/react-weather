import axios from 'axios';

// API
export const getCoordinates = async (location) => {
  try {
    const apiUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API}&location=${location}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data.results[0].locations[0].latLng;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherData = async (lat, lon) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=imperial`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

// DATETIME
export const unixToDateTime = (unix) => new Date(unix * 1000);

export const dateTimeFormat = (language, options, format) =>
  new Intl.DateTimeFormat(language, options).format(format);

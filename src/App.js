import React from 'react';
// import logo from './logo.svg';
import './App.css';

import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';

import {
  getLocation,
  getWeatherData,
  unixToDateTime,
  dateTimeFormat,
} from './util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // -- UI/API LOADING/ERROR
      isLoading: true,
      error: null,
      // -- API
      weather: null,
      location: null,
      // -- INDEX OF CLICKED COMPONENT TO UPDATE WEATHER DETAILS
      // STARTING WITH DEFAULT OF 0 (CURRENT DAY)
      compClickedIndex: 0,
    };
  }

  componentDidMount() {
    const successGeo = async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        const weather = await getWeatherData(latitude, longitude);
        const location = await getLocation(latitude, longitude);
        this.setState({
          weather,
          location,
          isLoading: false,
        });
      } catch (err) {
        this.setState({ error: err.message, isLoading: false });
      }
    };
    const errorGeo = (err) =>
      this.setState({ error: err.message, isLoading: false });
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
  }

  render() {
    const {
      isLoading,
      error,
      weather,
      location,
      compClickedIndex,
    } = this.state;
    console.log('At App.js: ', compClickedIndex);

    const renderedContent = error ? (
      <>{error}</>
    ) : (
      weather && (
        <div className="weather-wrapper">
          <WeatherDetails
            location={location}
            dayOfWeek={dateTimeFormat(
              'en-US',
              { weekday: 'long' },
              unixToDateTime(weather.current.dt)
            )}
            weatherCondition={weather.current.weather[0].description}
            icon={weather.current.weather[0].icon}
            currentTemp={Math.round(weather.current.temp)}
            highTemp={Math.round(
              weather.daily[unixToDateTime(weather.current.dt).getDay()].temp
                .max
            )}
            lowTemp={Math.round(
              weather.daily[unixToDateTime(weather.current.dt).getDay()].temp
                .min
            )}
            precipitation={
              weather.daily[unixToDateTime(weather.current.dt).getDay()].pop *
              100
            }
            humidity={weather.current.humidity}
            windSpeed={Math.round(weather.current.wind_speed)}
          />

          <WeatherForecast forecast={weather.daily} />
        </div>
      )
    );

    return <main>{isLoading ? <div>Loading...</div> : renderedContent}</main>;
  }
}

export default App;

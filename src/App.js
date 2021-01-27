import React from 'react';
// import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar';
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
      // -- INDEX TO UPDATE WEATHER DETAILS,
      // INCLUDING CLICKED COMPONENT,
      // STARTING W/DEFAULT OF 0 (CURRENT DAY)
      index: 0,
      // -- TEMP UNIT IN 'imperial'/'metric' W/DEFAULT 'imperial'
      tempUnit: 'imperial',
      search: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.getIndexFromComp = this.getIndexFromComp.bind(this);
    this.convertTempUnits = this.convertTempUnits.bind(this);
    this.activeClass = this.activeClass.bind(this);
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

  onSubmit(e) {
    e.preventDefault();
    const [target] = e;
    const [value, name] = target;

    this.setState({
      [name]: value,
    });
  }

  getIndexFromComp(index) {
    this.setState({ index: index });
  }

  convertTempUnits(e) {
    const { textContent } = e.target;
    this.setState({ tempUnit: textContent === 'C' ? 'metric' : 'imperial' });
    const childrenArr = [...e.target.parentNode.children];
    const clickedIndex = childrenArr.indexOf(e.target);
    childrenArr.forEach((val, ind) => {
      if (ind !== clickedIndex) val.classList.remove('active');
    });
    e.target.className = 'active';
  }

  activeClass(testIndex) {
    const { index } = this.state;
    return index === testIndex ? 'active' : '';
  }

  render() {
    const {
      isLoading,
      error,
      weather,
      location,
      index,
      tempUnit,
      search,
    } = this.state;

    console.log(search);

    const renderedContent = error ? (
      <>{error}</>
    ) : (
      weather && (
        <div className="weather-wrapper">
          <SearchBar onSubmit={this.onSubmit} />
          <WeatherDetails
            location={location}
            dayOfWeek={dateTimeFormat(
              'en-US',
              { weekday: 'long' },
              unixToDateTime(
                index === 0 ? weather.current.dt : weather.daily[index].dt
              )
            )}
            weatherCondition={
              index === 0
                ? weather.current.weather[0].description
                : weather.daily[index].weather[0].description
            }
            icon={
              index === 0
                ? weather.current.weather[0].icon
                : weather.daily[index].weather[0].icon
            }
            currentTemp={Math.round(
              index === 0 ? weather.current.temp : weather.daily[index].temp.day
            )}
            highTemp={Math.round(
              index === 0
                ? weather.daily[0].temp.max
                : weather.daily[index].temp.max
            )}
            lowTemp={Math.round(
              index === 0
                ? weather.daily[0].temp.min
                : weather.daily[index].temp.min
            )}
            precipitation={
              index === 0
                ? Math.round(weather.daily[0].pop * 100)
                : Math.round(weather.daily[index].pop * 100)
            }
            humidity={
              index === 0
                ? weather.current.humidity
                : weather.daily[index].humidity
            }
            windSpeed={Math.round(
              index === 0
                ? weather.current.wind_speed
                : weather.daily[index].wind_speed
            )}
            convertTempUnits={this.convertTempUnits}
            units={tempUnit}
          />

          <WeatherForecast
            forecast={weather.daily}
            getIndexFromComp={this.getIndexFromComp}
            activeClass={this.activeClass}
            units={tempUnit}
          />
        </div>
      )
    );

    return <main>{isLoading ? <div>Loading...</div> : renderedContent}</main>;
  }
}

export default App;

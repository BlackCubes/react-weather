import React from 'react';
import PropTypes from 'prop-types';

import WeatherSummary from './WeatherSummary';

import { unixToDateTime, dateTimeFormat } from './util';

const WeatherForecast = ({ forecast, getIndexFromComp }) => {
  const onClick = (e) => {
    const clickedIndex = [...e.currentTarget.parentNode.children].indexOf(
      e.currentTarget
    );
    getIndexFromComp(clickedIndex);
    console.log('At WeatherForecast.js: ', clickedIndex);
  };

  return (
    <div className="weather-forecast-wrapper">
      {forecast.slice(0, 5).map((prop) => (
        <WeatherSummary
          key={prop.dt}
          dayOfWeek={dateTimeFormat(
            'en-US',
            { weekday: 'short' },
            unixToDateTime(prop.dt)
          )}
          icon={prop.weather[0].icon}
          highTemp={Math.round(prop.temp.max)}
          lowTemp={Math.round(prop.temp.min)}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

WeatherForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
  getIndexFromComp: PropTypes.func.isRequired,
};

export default WeatherForecast;

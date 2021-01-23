import React from 'react';
import PropTypes from 'prop-types';

import WeatherSummary from './WeatherSummary';

import { unixToDateTime, dateTimeFormat } from './util';

const WeatherForecast = ({ forecast }) => (
  <div className="weather-forecast-wrapper">
    {forecast.daily.map((prop) => (
      <WeatherSummary
        key={prop.dt}
        dayOfWeek={dateTimeFormat(
          'en-US',
          { weekday: 'long' },
          unixToDateTime(prop.dt)
        )}
        icon={prop.weather[0].icon}
        highTemp={prop.temp.max}
        lowTemp={prop.temp.min}
      />
    ))}
  </div>
);

WeatherForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherForecast;

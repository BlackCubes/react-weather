import React from 'react';
import PropTypes from 'prop-types';

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp }) => (
  <div className="weather-summary-wrapper">
    <div className="weather-summary">
      <div className="weather-summary__day">{dayOfWeek}</div>

      <div className="weather-summary__icon">{icon}</div>

      <div className="weather-summary__temp">
        <div className="weather-summary__temp-high">{highTemp}</div>

        <div className="weather-summary__temp-low">{lowTemp}</div>
      </div>
    </div>
  </div>
);

WeatherSummary.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  highTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
};

export default WeatherSummary;

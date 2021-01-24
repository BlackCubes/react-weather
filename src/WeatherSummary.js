import React from 'react';
import PropTypes from 'prop-types';

import WeatherIcon from './WeatherIcon';

const WeatherSummary = ({
  dayOfWeek,
  icon,
  highTemp,
  lowTemp,
  onClick,
  activeClass,
}) => (
  // <div className="weather-summary-wrapper">
  <div
    className={`weather-summary ${activeClass}`}
    onClick={onClick}
    onKeyDown={onClick}
    role="presentation"
  >
    <div className="weather-summary__day paragraph">{dayOfWeek}</div>

    <div className="weather-summary__icon">
      <WeatherIcon weatherIcon={icon} />
    </div>

    <div className="weather-summary__temp paragraph">
      <div className="weather-summary__temp-high">{highTemp}</div>

      <div className="weather-summary__temp-low">{lowTemp}</div>
    </div>
  </div>
  // </div>
);

WeatherSummary.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  highTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string,
};

WeatherSummary.defaultProps = {
  activeClass: '',
};

export default WeatherSummary;

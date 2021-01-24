import React from 'react';
import PropTypes from 'prop-types';

import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

const WeatherSummary = ({
  dayOfWeek,
  icon,
  highTemp,
  lowTemp,
  onClick,
  activeClass,
  units,
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
      <div className="weather-summary__temp-high">
        <WeatherTemp temp={highTemp} units={units} />
      </div>

      <div className="weather-summary__temp-low">
        <WeatherTemp temp={lowTemp} units={units} />
      </div>
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
  units: PropTypes.oneOf(['imperial', 'metric']),
};

WeatherSummary.defaultProps = {
  activeClass: '',
  units: 'imperial',
};

export default WeatherSummary;

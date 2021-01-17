import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

library.add(faCloudSunRain);

const WeatherDetails = ({
  location,
  dayOfWeek,
  weatherCondition,
  icon,
  units,
  currentTemp,
  highTemp,
  lowTemp,
  precipitation,
  humidity,
  windSpeed,
}) => {
  const tempConversion = (temp) =>
    units === 'metric' ? (temp - 32) / 1.8 : temp;

  return (
    <div className="weather-summary">
      <div className="weather-summary__header">
        <div className="weather-summary__header-location">{location}</div>

        <div className="weather-summary__header-day">{dayOfWeek}</div>

        <div className="weather-summary__header-weather">
          {weatherCondition}
        </div>
      </div>
      <div className="weather-summary__condition">
        <div className="weather-summary__condition--primary">
          <div className="weather-summary__condition-icon">
            <FontAwesomeIcon icon={icon} />
          </div>

          <div className="weather-summary__condition-temp">
            <span className="weather-summary__condition-temp-value">
              {tempConversion(currentTemp)}
            </span>

            <div className="weather-summary__condition-temp-unit">
              <span>&deg; F</span>
              &nbsp; | &nbsp;
              <span>&deg; C</span>
            </div>
          </div>
        </div>

        <div className="weather-summary__condition--secondary">
          <div className="weather-summary__condition-hightemp">
            {`High: ${tempConversion(highTemp) + String.fromCharCode(176)}`}
          </div>

          <div className="weather-summary__condition-lowtemp">
            {`Low: ${tempConversion(lowTemp) + String.fromCharCode(176)}`}
          </div>

          <div className="weather-summary__condition-precipitation">
            {`Precipitation: ${precipitation + String.fromCharCode(37)}`}
          </div>

          <div className="weather-summary__condition-humidity">
            {`Humidity: ${humidity + String.fromCharCode(37)}`}
          </div>

          <div className="weather-summary__condition-windspeed">
            {`Wind: ${windSpeed} mph`}
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherDetails.propTypes = {
  location: PropTypes.string.isRequired,
  dayOfWeek: PropTypes.string.isRequired,
  weatherCondition: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  units: PropTypes.oneOf(['imperial', 'metric']),
  currentTemp: PropTypes.number,
  highTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
  precipitation: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

WeatherDetails.defaultProps = {
  units: 'imperial',
  currentTemp: 55,
};

export default WeatherDetails;

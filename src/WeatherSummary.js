import React from 'react';
import PropTypes from 'prop-types';

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
}) => (
  <div className="weather-details">
    <div className="weather-details__header">
      <div className="weather-details__header-location">{location}</div>

      <div className="weather-details__header-day">{dayOfWeek}</div>

      <div className="weather-details__header-weather">{weatherCondition}</div>
    </div>
    <div className="weather-details__condition">
      <div className="weather-details__condition--primary">
        <img
          className="weather-details__condition-icon"
          src={`${icon}`}
          alt="An icon"
        />

        <div className="weather-details__condition-temp">
          <span className="weather-details__condition-temp-value">
            {currentTemp}
          </span>

          <div className="weather-details__condition-temp-unit">
            <span>&deg; F</span>
            &nbsp; | &nbsp;
            <span>&deg; C</span>
          </div>
        </div>
      </div>

      <div className="weather-details__condition--secondary">
        <div className="weather-details__condition-hightemp">
          {`High: ${highTemp}`}
        </div>

        <div className="weather-details__condition-lowtemp">
          {`Low: ${lowTemp}`}
        </div>

        <div className="weather-details__condition-precipitation">
          {`Precipitation: ${precipitation}`}
        </div>

        <div className="weather-details__condition-humidity">
          {`Humidity: ${humidity}`}
        </div>

        <div className="weather-details__condition-windspeed">
          {`Wind: ${windSpeed}`}
        </div>
      </div>
    </div>
  </div>
);

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

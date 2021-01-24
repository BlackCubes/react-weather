import React from 'react';
import PropTypes from 'prop-types';

import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

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
  convertTempUnits,
}) => (
  <div className="weather-details-wrapper">
    <div className="weather-details">
      <div className="weather-details__header">
        <div className="weather-details__header-location heading-primary">
          {location}
        </div>

        <div className="weather-details__header-day paragraph">{dayOfWeek}</div>

        <div className="weather-details__header-weather paragraph">
          {weatherCondition}
        </div>
      </div>
      <div className="weather-details__condition">
        <div className="weather-details__condition--primary">
          <div className="weather-details__condition-icon">
            <WeatherIcon weatherIcon={icon} />
          </div>

          <div className="weather-details__condition-temp">
            <span className="weather-details__condition-temp-value heading-secondary">
              <WeatherTemp temp={currentTemp} units={units} />
            </span>

            <div className="weather-details__condition-temp-unit book-size">
              <span
                onClick={convertTempUnits}
                onKeyDown={convertTempUnits}
                role="presentation"
              >
                F
              </span>
              &nbsp; | &nbsp;
              <span
                onClick={convertTempUnits}
                onKeyDown={convertTempUnits}
                role="presentation"
              >
                C
              </span>
            </div>
          </div>
        </div>

        <div className="weather-details__condition--secondary paragraph">
          <div className="weather-details__condition-hightemp">
            High:&nbsp;
            <WeatherTemp temp={highTemp} units={units} />
            &deg;
          </div>

          <div className="weather-details__condition-lowtemp">
            Low:&nbsp;
            <WeatherTemp temp={lowTemp} units={units} />
            &deg;
          </div>

          <div className="weather-details__condition-precipitation">
            {`Precipitation: ${precipitation + String.fromCharCode(37)}`}
          </div>

          <div className="weather-details__condition-humidity">
            {`Humidity: ${humidity + String.fromCharCode(37)}`}
          </div>

          <div className="weather-details__condition-windspeed">
            {`Wind: ${windSpeed} mph`}
          </div>
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
  convertTempUnits: PropTypes.func.isRequired,
};

WeatherDetails.defaultProps = {
  units: 'imperial',
  currentTemp: 55,
};

export default WeatherDetails;

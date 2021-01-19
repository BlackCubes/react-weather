import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import Temperature from './Temperature';

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
  const handleClick = () => {
    const unitChangeId = document.getElementById('unitChange');
    // const spanElement = unitChangeId.firstElementChild;
    // const degreeType = unitChangeId.firstElementChild.innerText;
    const { parentElement } = unitChangeId;

    const swap = (nodeA, nodeB) => {
      const parentA = nodeA.parentNode;
      const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
      nodeB.parentNode.insertBefore(nodeA, nodeB);
      parentA.insertBefore(nodeB, siblingA);
    };

    [...parentElement.children].forEach((child) => {
      if (child.nodeName !== 'A') {
        swap(child, unitChangeId);
        const swappedText = child.textContent;
        const originalText = unitChangeId.textContent;
        child.textContent = originalText;
        unitChangeId.textContent = swappedText;
      }
      // if (child.nodeName !== 'A') {
      //   unitChangeId.firstElementChild.innerText = child.innerText;
      //   child.insertAdjacentElement('afterend', unitChangeId);
      //   child.remove();
      // } else {
      //   child.insertAdjacentElement('afterend', spanElement);
      //   child.remove();
      // }
    });
  };

  return (
    <div className="weather-summary-wrapper">
      <div className="weather-summary">
        <div className="weather-summary__header">
          <div className="weather-summary__header-location heading-primary">
            {location}
          </div>

          <div className="weather-summary__header-day paragraph">
            {dayOfWeek}
          </div>

          <div className="weather-summary__header-weather paragraph">
            {weatherCondition}
          </div>
        </div>
        <div className="weather-summary__condition">
          <div className="weather-summary__condition--primary">
            <div className="weather-summary__condition-icon heading-secondary">
              <FontAwesomeIcon icon={icon} />
            </div>

            <div className="weather-summary__condition-temp">
              <span className="weather-summary__condition-temp-value heading-secondary">
                <Temperature temp={currentTemp} units={units} />
              </span>

              <div className="weather-summary__condition-temp-unit book-size">
                <span>&deg;F</span>
                &nbsp; | &nbsp;
                <button id="unitChange" type="button" onClick={handleClick}>
                  <span>&deg;C</span>
                </button>
              </div>
            </div>
          </div>

          <div className="weather-summary__condition--secondary paragraph">
            <div className="weather-summary__condition-hightemp">
              High:&nbsp;
              <Temperature temp={highTemp} units={units} />
              &deg;
            </div>

            <div className="weather-summary__condition-lowtemp">
              Low:&nbsp;
              <Temperature temp={lowTemp} units={units} />
              &deg;
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

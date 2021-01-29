import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = ({ weatherIcon }) => (
  <img
    src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
    alt="Weather icon"
  />
);

WeatherIcon.propTypes = { weatherIcon: PropTypes.string.isRequired };

export default WeatherIcon;

import React from 'react';
import PropTypes from 'prop-types';

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp }) => (
  <>
    <h1>{dayOfWeek}</h1>
    <img src={`${icon}`} alt="An icon" />
    <p>{highTemp}</p>
    <p>{lowTemp}</p>
  </>
);

WeatherSummary.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  highTemp: PropTypes.string.isRequired,
  lowTemp: PropTypes.string.isRequired,
};

export default WeatherSummary;

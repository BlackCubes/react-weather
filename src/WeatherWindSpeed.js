import PropTypes from 'prop-types';

const WeatherWindSpeed = ({ windSpeed, units }) =>
  units === 'metric'
    ? `${Math.round(windSpeed / 2.237)} m/s`
    : `${windSpeed} mph`;

WeatherWindSpeed.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  units: PropTypes.oneOf(['imperial', 'metric']).isRequired,
};

export default WeatherWindSpeed;

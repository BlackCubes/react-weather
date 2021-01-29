import PropTypes from 'prop-types';

const WeatherTemp = ({ temp, units }) =>
  units === 'metric' ? Math.round((temp - 32) / 1.8) : temp;

WeatherTemp.propTypes = {
  temp: PropTypes.number.isRequired,
  units: PropTypes.oneOf(['imperial', 'metric']).isRequired,
};

export default WeatherTemp;

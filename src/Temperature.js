import PropTypes from 'prop-types';

const Temperature = ({ temp, units }) =>
  units === 'metric' ? (temp - 32) / 1.8 : temp;

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  units: PropTypes.oneOf(['imperial', 'metric']).isRequired,
};

export default Temperature;

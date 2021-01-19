import PropTypes from 'prop-types';

const Temperature = ({ temp }) => temp;

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Temperature;

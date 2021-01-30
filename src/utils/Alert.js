import React from 'react';
import PropTypes from 'prop-types';

// export const hideAlert = () => {
//   const el = document.querySelector('.alert');
//   if (el) el.parentElement.removeChild(el);
// };

// export const showAlert = (type, msg) => {
//   hideAlert();
//   const markup = `<div class="alert alert--${type}">${msg}</div>`;
//   document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
//   window.setTimeout(hideAlert, 10000);
// };

const Alert = ({ message, type }) => {
  let styleDisplay = 'block';
  setTimeout(() => {
    styleDisplay = 'none';
  }, 5000);
  return (
    <div className={`alert alert--${type}`} style={{ display: styleDisplay }}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;

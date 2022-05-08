/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function AuthButton({
  type, buttonText, onClick, loading, className = '',
}) {
  const test = 0;
  return (
    <div>authButton</div>
  );
}

AuthButton.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default AuthButton;

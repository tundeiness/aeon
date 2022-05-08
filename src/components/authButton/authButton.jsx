/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({
  buttonType, buttonText, loading,
}) => {
  const test = 0;
  return (
    <button type={buttonType}>
      {buttonText}
    </button>
  );
};

AuthButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AuthButton;

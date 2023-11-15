import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, disabled }) => (
  <button type="button" className="Button" onClick={onClick} disabled={disabled}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;

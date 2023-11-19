import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, isVisible }) => {
  return (
    <button onClick={onClick} className={styles.Button} style={{ display: isVisible ? 'block' : 'none' }}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default Button;

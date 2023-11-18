import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, disable }) => (

  <button type="button" className={styles.Button} onClick={onClick} disabled={disable}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default Button;

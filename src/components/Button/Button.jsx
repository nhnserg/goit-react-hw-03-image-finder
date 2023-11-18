import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, disabled }) => (
  <div className={styles['Button-item']}>
    <button type="button" className={styles.Button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;

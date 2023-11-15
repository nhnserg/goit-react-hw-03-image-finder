import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onclick, disabled }) => (
  <button
    type="button"
    className="Button"
    onClick={onclick}
    disabled={disabled}
  >
    Load more...
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;

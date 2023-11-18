import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { image, alt } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleClose}>
        <div className={styles.Modal}>
          <img src={image} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.proppTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onclose: PropTypes.func.isRequired,
};
export default Modal;

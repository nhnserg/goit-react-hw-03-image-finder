import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
    <img className='ImageGalleryItem-image' src={image.webformatURL} alt={image.id} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;

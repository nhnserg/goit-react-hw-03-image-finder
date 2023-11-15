import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

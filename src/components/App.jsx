import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImages from './Services/api';
import styles from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    showModal: false,
    selectedImage: '',
    hasMoreImages: true,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });

      const newImages = await fetchImages({ query, page });

      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
        hasMoreImages: newImages.length > 0,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, images: [], page: 1, hasMoreImages: true });
  };

  handleLoadMore = () => {
    this.getImages();
  };

  handleImageClick = (selectedImage) => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, showModal, selectedImage, hasMoreImages, isLoading } = this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {hasMoreImages && images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
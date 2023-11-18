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
    images: [],
    query: '',
    page: 1,
    perPage: 12,
    isLoading: false,
    showModal: false,
    selectedImage: '',
    hasMore: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
  }

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1, images: [], hasMore: true });
  };


  getImages = async () => {
    const { query, page, perPage } = this.state;

    this.setState({ isLoading: true });
    try {
      const newImages = await fetchImages({ query, page, perPage });
      this.setState((_, prevState) => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
        hasMore: newImages.length === perPage,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.getImages();
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ showModal: true, selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };



  render() {
    const { images, isLoading, showModal, selectedImage, hasMore } = this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {hasMore && images.length > 0 && <Button onClick={this.handleLoadMore} disabled={isLoading} />}
        {showModal && <Modal src={selectedImage} alt="Large" onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;




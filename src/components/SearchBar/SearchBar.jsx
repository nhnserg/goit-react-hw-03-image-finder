import { Component } from 'react';
import styles from './SearchBar.module.css'

class SearchBar extends Component {
    state = {
        query: '',
    };

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    };
    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit} >
                    <button type='submit' className={styles['SearchForm-button']}>
                        <span className={styles['SearchForm-button-label']}>Search</span>
                    </button>
                    <input
                        className={styles['SearchForm-input']}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange} />
                </form>
            </header>
        )
    }
}


export default SearchBar
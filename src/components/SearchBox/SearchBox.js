import React, { Component } from 'react';
import store from '../../redux/store';
import { addMovies } from "../../redux/actions";
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: '',
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        const { searchLine } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=a6408ff1&s=${searchLine}`)
        .then(data => data.json())
        .then(data => {
            if(data.Response === 'True') {
                store.dispatch(addMovies(data.Search));
            } else {
                alert('Ничего не найдено')
            }
        })
    }
    
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;

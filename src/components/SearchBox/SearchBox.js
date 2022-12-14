import React, { Component } from 'react';
import { connect } from "react-redux";
import './SearchBox.css';
import { searchMovie } from '../../redux/actions';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${this.state.searchLine}&apikey=a6408ff1`)
            .then(res => res.json())
            .then(data => {
                this.props.searchMovie(data.Search);
            });
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

const mapDispatchToProps = (dispatch) => ({
    searchMovie: (data) => dispatch(searchMovie(data)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
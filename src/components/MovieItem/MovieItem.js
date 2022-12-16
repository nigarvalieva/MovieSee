import React, { Component } from 'react';
import './MovieItem.css';
import store from '../../redux/store';
import { aside } from "../../redux/actions";

class MovieItem extends Component {
    btnAside = () => {
        const { imdbID, Title, Year, Poster } = this.props;
        store.dispatch(aside({ imdbID, Title, Year, Poster }));
    }

    render() {
        const { Title, Year, Poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" onClick={this.btnAside} className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}

export default MovieItem;

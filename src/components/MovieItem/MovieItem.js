import React, { Component } from 'react';
import { connect } from "react-redux";
import './MovieItem.css';
import { addToFavourites } from '../../redux/actions';

class MovieItem extends Component {
    render() {
        const { Title, Year, Poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button"
                     onClick={(e) => {this.props.addToFavourites(imdbID);
                         e.target.disabled=true;
                         document.querySelector(".favorites__save").disabled=false
                        }}
                      disabled={false}>
                        Добавить в список
                    </button>
                </div>
            </article>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (id) => dispatch(addToFavourites(id)),
});
export default connect(null, mapDispatchToProps)(MovieItem);
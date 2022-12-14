import React, { Component } from 'react';
import { connect } from "react-redux";
import {addToFavourites} from "../../redux/actions";
import './Favorites.css';


class Favorites extends Component {
    render() { 
        return (
            <div className="favorites">
                <input placeholder="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favorites.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year}) <button className="deletefav">X</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      favorites: state.favorites,
    };
  };

export default connect(mapStateToProps)(Favorites);
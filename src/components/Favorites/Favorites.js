import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFromFavourites } from "../../redux/actions";
import "./Favorites.css";

class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <input placeholder="Новый список" className="favorites__name" />
        <ul className="favorites__list">
          {this.props.favorites.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  className="deletefav"
                  onClick={() => {
                    this.props.deleteFromFavourites(item.imdbID);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button"
         className={(this.props.favorites.length!==0  && (document.querySelector(".favorites__name").value!==""))===true ? "favorites__save" : "favorites__save_dis"} disabled>
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromFavourites: (id) => dispatch(deleteFromFavourites(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
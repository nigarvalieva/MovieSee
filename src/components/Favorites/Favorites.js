import React, { Component } from "react";
import { connect } from "react-redux";
import { setId, deleteFromFavourites, makeDisabled } from "../../redux/actions";
import "./Favorites.css";
import { Link } from "react-router-dom";

class Favorites extends Component {
  clickHandler() {
    let list = {
      title: document.querySelector(".favorites__name").value,
      movies: this.props.favorites,
    };

    fetch("https://acb-api.algoritmika.org/api/movies/list/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id);
        this.props.setId(data.id);
      })
      .catch((err) => console.log(err));
    document.querySelector(".favorites__save").textContent = "Загрузка...";
    setTimeout(() => {
      document.querySelector(".favorites__save").remove();
      document.querySelector(".link").style.display = 'block'
    }, 500);
  }

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
                  onClick={() => { this.props.deleteFromFavorites(item.imdbID);}}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="favorites__save"
          onClick={() => {
            this.clickHandler();
            document.querySelector(".favorites__save").disabled=false
          }}
          disabled
          >
          Сохранить список
        </button>
        <Link className="link" to={`/list/${this.props.idPost}`}>
          Перейти к списку
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    idPost: state.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromFavorites: (id) => dispatch(deleteFromFavourites(id)),
  setId: (id) => dispatch(setId(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFromFavourites, setId } from "../../redux/actions";
import "./Favorites.css";

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
    document.querySelector(".favorites__save").textContent = "Идет запрос";
    setTimeout(() => {
      document.querySelector(".favorites__save").remove();
      document.querySelector(".ssilka").style.display = 'block'
    }, 1000);
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
          className="favorites__save" onClick={() => {
            this.clickHandler()}}>
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idPost: state.id,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => ({
  setId: (id) => dispatch(setId(id)),
  deleteFromFavourites: (id) => dispatch(deleteFromFavourites(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
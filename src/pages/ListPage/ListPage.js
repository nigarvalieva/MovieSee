import React, { Component } from 'react';
import './ListPage.css';
import {connect} from 'react-redux'

class ListPage extends Component {
    state = {
        id: '',
        movies: [],
        title: ""
    }

    loadFilms = () => {
        const res = fetch(`https://acb-api.algoritmika.org/api/movies/list/${this.props.id}`)
        const {movies, title} = res.json()
        this.setState({title})
        movies.forEach(item => {
            fetch(`http://www.omdbapi.com/?i=${item}&apikey=a6408ff1`)
            .then(res => res.json())
            .then(data => {
                const objForPush = {
                    Title: data.Title,
                    Year: data.Year,
                    imdbID: data.imdbID,
                }
                const newMovies = [...this.state.movies]
                newMovies.push(objForPush)
                this.setState({movies: newMovies})
            })
        })
    }
    componentDidMount() {  
        this.loadFilms() 
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.title}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`}
                                target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        id: state.id
    }
}

export default connect(mapStateToProps)(ListPage);
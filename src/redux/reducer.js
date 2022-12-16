import { ARRAY_MOVIE, ASIDE, DELETE_ITEM, LIST } from './actions';

const initialState = {
    fav: [],
    movies: [
        {
            imdbID: 'tt3896198',
            Title: "Guardians of the Galaxy Vol. 2",
            Year: 2017,
            Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",

        },
        {
            imdbID: 'tt0068646',
            Title: "The Godfather",
            Year: 1972,
            Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

        }

    ],
    id: '',
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ARRAY_MOVIE:
            return { ...state, movies: action.payload.array };
        case ASIDE:
            const { obj } = action.payload;
            const newFav = [...state.fav];
            const imdbID = obj.imdbID;
            const film = newFav.find(item => item.imdbID === imdbID);
            if (!film) {
                newFav.push(obj);
                return { ...state, fav: newFav };
            } else {
                alert("Этот фильм уже добавлен");
            };
        case LIST:
            const { id } = action.payload
            console.log(id)
            return { ...state, id: id }
        case DELETE_ITEM:
            const index = action.payload.index;
            const favBeforeDelete = state.fav;
            favBeforeDelete.splice(index, 1);
            return {...state, fav: favBeforeDelete};
        }
            return state;
}

export default reducer;

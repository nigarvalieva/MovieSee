const initialState = {
    favorites: [],
    movies: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_FAVOURITES":
            const newState = { ...state };
            const id = action.payload.id;
            const match = newState.movies.find((item) => item.imdbID === id);
            let favorites = [...state.favorites, match];
            return {
                ...state,
                favorites,
            }
        case "SEARCH_MOVIE":
            const movies = action.payload.movie

            return {
                ...state,
                movies,
            }
        case "REMOVE_FROM_FAVOURITES":
            let favList = [...state.favorites];

            let deleted = state.favList.find(
              (item) => item.imdbID === action.payload.id
            );

            let index = state.favList.indexOf(deleted);
            favList.splice(index, 1);
            state.favorites = [...favList]
            return {
              ...state,
              favorites,
            }; 
        default:
            return state;
    }

}
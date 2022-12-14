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
        default:
            return state;
    }

}
const initialState = {
    id: null,
    favorites: [],
    movies: [],
    listArr: []
};

export default function reducer(state = initialState, action) {
    let favorites = null;
    switch (action.type) {
        case "SEARCH_MOVIE":
            const movies = action.payload.movie
            return {
                ...state,
                movies,
            }

        case "ADD_TO_FAVOURITES":
            const item = state.movies.find((item) => item.imdbID === action.payload.id)
            favorites = [...state.favorites, item]
            return {
                ...state,
                favorites,
            }
        case "DELETE_FROM_FAVOURITES":
            favorites = [...state.favorites]

            let deletefav = state.favorites.find(
                (item) => item.imdbID === action.payload.id
            )
            favorites.splice(state.favorites.indexOf(deletefav), 1)
            return {
                ...state,
                favorites,
            };
        case "SET":
            return {
                ...state,
                id: action.payload.id,
            }
        case ("DO_LIST"):
            return {
                ...state,
                listArr: action.payload.data
            }
        default:
            return state;
    }
}
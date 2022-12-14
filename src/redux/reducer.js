const initialState = {
    favorites: [],
    movies: [],
};

export default function reducer(state = initialState, action) {
    if(action.type === "ADD_MOVIES") {
        const movies = action.payload.movie
        return {
            ...state,
            movies,
        }
    }
    else return state;
}
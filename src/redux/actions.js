export function searchMovie(movie) {
    return {
        type: "ADD_MOVIES",
        payload: {
           movie: movie,
        }
    }
}
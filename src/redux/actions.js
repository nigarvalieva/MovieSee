export function addToFavourites(id) {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: {
            id: id,
        },
    };
}

export function searchMovie(movie) {
    return {
        type: "SEARCH_MOVIE",
        payload: {
           movie: movie,
        }
    }
}

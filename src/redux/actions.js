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

export function removeFromFavourites(id) {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: {
            id: id,
        },
    };
}
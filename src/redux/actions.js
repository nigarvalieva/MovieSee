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

export function deleteFromFavourites(id) {
    return {
        type: "DELETE_FROM_FAVOURITES",
        payload: {
            id: id,
        },
    };
}

export function setId(id){
    return{
        type:"SET",
        payload:{
            id: id
        }
    };
}
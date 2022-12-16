const ARRAY_MOVIE = "ARRAY_MOVIE";
const ASIDE = "ASIDE";
const LIST = "LIST";
const DELETE_ITEM = 'DELETE_ITEM'

function addMovies(array) {
    return {
        type: ARRAY_MOVIE,
        payload: {
            array
        }
    }
}

function aside(obj) {
    return {
        type: ASIDE,
        payload: {
            obj
        }
    }
}

function addList(id) {
    return {
        type: LIST,
        payload: {
            id
        }
    }
}

function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        payload: {
            index
        }
    }
}

export { ARRAY_MOVIE, ASIDE, LIST, DELETE_ITEM, addMovies, aside, addList, deleteItem };

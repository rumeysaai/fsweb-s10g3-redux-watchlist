import { ADD_FAVORITE, REMOVE_FAVORITE, SONRAKI_FILM, ONCEKI_FILM } from "../actions/actions"
import { movies } from '../movies';

const initialState = {
    movies: movies,
    myList: [],
    sira: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            let newFavItem = action.payload;
            let newMovieList = state.movies.filter(
                (mov) => mov.id !== action.payload.id
            )
            return {
                ...state,
                sira: state.sira === newMovieList.length ? state.sira -1 : state.sira,
                myList: [...state.myList, newFavItem],
                movies: newMovieList,
            }
        case REMOVE_FAVORITE:
            let exFavItemId = action.payload;
            let exFavoriteMovieObj = state.myList.find(
                (ex) => ex.id === exFavItemId
            );
            let newFavList = state.myList.filter((fav) => fav.id !== exFavItemId);
            return {
                ...state,
                myList: newFavList,
                movies: [...state.movies, exFavoriteMovieObj],
            };
        case SONRAKI_FILM:
            return {
                ...state,
                sira: state.sira + 1
            }
        case ONCEKI_FILM:
            return {
                ...state,
                sira: state.sira - 1
            }
        default:
            return state;

    }
}

export default reducer;
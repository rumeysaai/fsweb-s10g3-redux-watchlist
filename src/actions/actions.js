export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SONRAKI_FILM = "SONRAKI_FILM";
export const ONCEKI_FILM = "ONCEKI_FILM";

export const addFavorite = (movie) =>{
    return ({type: ADD_FAVORITE, payload: movie})
}
export const removeFavorite = (id) =>{
    return ({type: REMOVE_FAVORITE, payload: id})
}
export function sonrakiFilm() {
   return {type: SONRAKI_FILM}
  }
 export function oncekiFilm() {
    return {type :ONCEKI_FILM}
  }
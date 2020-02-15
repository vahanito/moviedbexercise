import { LOAD_FAVORITE_MOVIES, LOAD_FAVORITE_MOVIES_SUCCESS } from '../constants';

export const loadFavoriteMovies = () => {
  return {
    type: LOAD_FAVORITE_MOVIES
  };
};

export const loadFavoriteMoviesSuccess = (movies) => {
  return {
    type: LOAD_FAVORITE_MOVIES_SUCCESS,
    payload: movies
  };
};

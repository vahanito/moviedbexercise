import {
  LOAD_MOVIE,
  ADD_FAVORITE_MOVIE,
  ADDED_FAVORITE_MOVIE,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_FAVORITE,
  REMOVE_FAVORITE_MOVIE,
  REMOVED_FAVORITE_MOVIE,
  LOAD_MOVIE_SUCCESS
} from '../constants';

export const loadMovie = (movieId) => {
  return {
    type: LOAD_MOVIE,
    payload: movieId
  };
};

export const loadMovieDetailSuccess = (response) => {
  return {
    type: LOAD_MOVIE_SUCCESS,
    payload: response
  };
};

export const loadMovieDetailError = (error) => {
  return {
    type: LOAD_MOVIE_ERROR,
    payload: error
  };
};


export const loadFavoriteInfo = (response) => {
  return {
    type: LOAD_MOVIE_FAVORITE,
    payload: response
  };
};

export const addToFavorites = (movie) => {
  return {
    type: ADD_FAVORITE_MOVIE,
    payload: movie
  };
};

export const removeFromFavorites = (movie) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: movie
  };
};

export const addedToFavorites = () => {
  return {
    type: ADDED_FAVORITE_MOVIE
  };
};

export const removedFromFavorites = () => {
  return {
    type: REMOVED_FAVORITE_MOVIE
  };
};

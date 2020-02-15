import { LOAD_MOVIE, LOAD_MOVIE_ERROR, LOAD_MOVIE_SUCCESS } from '../constants';

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

import { ADDED_FAVORITE_MOVIE, LOAD_MOVIE_ERROR, LOAD_MOVIE_FAVORITE, REMOVED_FAVORITE_MOVIE, LOAD_MOVIE_SUCCESS } from '../constants';

const initialState = {
  movie: undefined,
  error: undefined,
  isFavorite: false
};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIE_SUCCESS:
      return {...state, movie: action.payload, error: undefined};
    case LOAD_MOVIE_ERROR:
      return {...state, movie: undefined, error: action.payload};
    case LOAD_MOVIE_FAVORITE:
      return {...state, isFavorite: action.payload};
    case ADDED_FAVORITE_MOVIE:
      return {...state, isFavorite: true};
    case REMOVED_FAVORITE_MOVIE:
      return {...state, isFavorite: false};
    default:
      return state;
  }
};

export default movieDetail;

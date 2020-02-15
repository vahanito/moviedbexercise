import { LOAD_MOVIE_ERROR, LOAD_MOVIE_SUCCESS } from '../constants';

const initialState = {
  movie: undefined,
  error: undefined
};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIE_SUCCESS:
      return {movie: action.payload, error: undefined};
    case LOAD_MOVIE_ERROR:
      return {movie: undefined, error: action.payload};
    default:
      return state;
  }
};

export default movieDetail;

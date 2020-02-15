import { LOAD_FAVORITE_MOVIES_SUCCESS } from '../constants';

const initialState = {
  movies: undefined,
  error: undefined
};

const favoriteMovies = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITE_MOVIES_SUCCESS:
      return {...state, movies: action.payload, error: undefined};
    default:
      return state;
  }
};

export default favoriteMovies;

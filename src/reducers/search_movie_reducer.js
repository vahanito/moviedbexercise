import { SEARCH_ERROR, SEARCH_SUCCESS } from '../constants';

const initialState = {
  movies: undefined,
  error: undefined
};

const movieSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {...state, movies: action.payload.Search, error: undefined};
    case SEARCH_ERROR:
      return {...state, movies: undefined, error: action.payload};
    default:
      return state;
  }
};

export default movieSearch;

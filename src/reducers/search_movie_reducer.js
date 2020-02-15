import { INIT_SEARCH_SUCCESS, LOAD_NEXT_PAGE_ERROR, LOAD_NEXT_PAGE_SUCCESS, SEARCH_ERROR, UPDATE_SEARCH_VALUE } from '../constants';

const initialState = {
  searchValue: '',
  page: undefined,
  hasMore: false,
  movies: undefined,
  error: undefined
};

const movieSearch = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SEARCH_SUCCESS:
      return {...state, movies: action.payload.Search, error: undefined, page: 1, hasMore: true};
    case SEARCH_ERROR:
      return {...state, movies: undefined, error: action.payload, hasMore: false};
    case UPDATE_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case LOAD_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        movies: state.movies.concat(action.payload.Search),
        age: state.page + 1,
        hasMore: true
      };
    case LOAD_NEXT_PAGE_ERROR:
      return {...state, hasMore: false};
    default:
      return state;
  }
};

export default movieSearch;

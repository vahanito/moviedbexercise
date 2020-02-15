import { combineReducers } from 'redux';
import movieSearch from './search_movie_reducer';
import movieDetail from './movie_detail_reducer';

const allReducers = combineReducers({
  movieSearch,
  movieDetail
});

export default allReducers;

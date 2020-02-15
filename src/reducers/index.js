import { combineReducers } from 'redux';
import movieSearch from './search_movie_reducer';
import movieDetail from './movie_detail_reducer';
import favoriteMovies from './favorite_movies_reducer';

const allReducers = combineReducers({
  movieSearch,
  movieDetail,
  favoriteMovies
});

export default allReducers;

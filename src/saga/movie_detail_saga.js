import { call, put, takeLatest } from '@redux-saga/core/effects';
import { API_MOVIE_DETAIL, LOAD_MOVIE, ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from '../constants';
import { getFavoriteMoviesJson, handleResponse } from '../utils/utils';
import { addedToFavorites, loadFavoriteInfo, loadMovieDetailError, loadMovieDetailSuccess, removedFromFavorites } from '../actions/movie_detail_actions';

function * watchMovieDetail() {
  yield takeLatest(LOAD_MOVIE, loadMovieDetail);
  yield takeLatest(LOAD_MOVIE, isMovieFavorite);
  yield takeLatest(ADD_FAVORITE_MOVIE, addFavorite);
  yield takeLatest(REMOVE_FAVORITE_MOVIE, removeFavorite);
}

function * loadMovieDetail(action) {
  const response = yield call(fetch, API_MOVIE_DETAIL + action.payload);
  try {
    let searchResponse = yield handleResponse(response);
    yield put(loadMovieDetailSuccess(searchResponse));
  } catch (err) {
    yield put(loadMovieDetailError(err));
  }
}

function * isMovieFavorite(action) {
  const favoriteMovies = getFavoriteMoviesJson();
  yield put(loadFavoriteInfo(favoriteMovies[action.payload] !== undefined));
}

function mapMovie(storedMovies, movie) {
  return {
    ...storedMovies,
    [movie.imdbID]: {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Poster: movie.Poster
    }
  };
}

function * addFavorite(action) {
  const movie = action.payload;
  const favoriteMovies = getFavoriteMoviesJson();
  localStorage.setItem('favoriteMovies', JSON.stringify(mapMovie(favoriteMovies, movie)));
  yield put(addedToFavorites());
}

function * removeFavorite(action) {
  const favoriteMovies = getFavoriteMoviesJson();
  delete favoriteMovies[action.payload.imdbID];
  localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  yield put(removedFromFavorites());
}

export default watchMovieDetail;

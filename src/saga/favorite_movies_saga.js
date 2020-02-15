import { takeLatest, put } from '@redux-saga/core/effects';
import { LOAD_FAVORITE_MOVIES } from '../constants';
import { getFavoriteMoviesJson } from '../utils/utils';
import { loadFavoriteMoviesSuccess } from '../actions/favorite_movies_actions';

function* watchGetFavoriteMovies() {
  yield takeLatest(LOAD_FAVORITE_MOVIES, getFavoriteMovies);
}

function* getFavoriteMovies(action) {
  yield put(loadFavoriteMoviesSuccess(Object.values(getFavoriteMoviesJson())));
}

export default watchGetFavoriteMovies;

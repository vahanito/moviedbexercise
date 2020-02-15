import { takeLatest, call, put } from '@redux-saga/core/effects';
import { API_MOVIE_DETAIL, LOAD_MOVIE } from '../constants';
import { handleResponse } from '../utils/utils';
import { loadMovieDetailError, loadMovieDetailSuccess } from '../actions/movie_detail_actions';

function* watchMovieDetail() {
  yield takeLatest(LOAD_MOVIE, loadMovieDetail);
}

function* loadMovieDetail(action) {
  const response = yield call(fetch, API_MOVIE_DETAIL + action.payload);
  try {
    let searchResponse = yield handleResponse(response);
    yield put(loadMovieDetailSuccess(searchResponse));
  } catch (err) {
    yield put(loadMovieDetailError(err));
  }
}

export default watchMovieDetail;

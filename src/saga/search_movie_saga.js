import { takeLatest, call, put } from '@redux-saga/core/effects';
import { API_SEARCH, SEARCH_INIT } from '../constants';
import { handleResponse } from '../utils/utils';
import { searchError, searchSuccess } from '../actions/search_movie_actions';

function* watchSearchMovie() {
  yield takeLatest(SEARCH_INIT, searchMovie);
}

function* searchMovie(action) {
  const response = yield call(fetch, API_SEARCH + action.payload);
  try {
    let searchResponse = yield handleResponse(response);
    yield put(searchSuccess(searchResponse));
  } catch (err) {
    yield put(searchError(err));
  }
}

export default watchSearchMovie;

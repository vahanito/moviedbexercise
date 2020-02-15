import { takeLatest, call, put, select } from '@redux-saga/core/effects';
import { API_PAGE, API_SEARCH, LOAD_NEXT_PAGE, SEARCH_INIT } from '../constants';
import { searchError, initSearchSuccess, loadNextPageSuccess, loadNextPageError } from '../actions/search_movie_actions';

function* watchSearchMovie() {
  yield takeLatest(SEARCH_INIT, searchMovie);
  yield takeLatest(LOAD_NEXT_PAGE, loadNextPage);
}

function* loadNextPage() {
  const searchValue = yield select(state => state.movieSearch.searchValue);
  const currentPage = yield select(state => state.movieSearch.page);
  const response = yield call(fetch, API_SEARCH + searchValue + API_PAGE + (currentPage+1));
  try {
    let searchResponse = yield response.json();
    if (searchResponse.Error) {
      yield put(loadNextPageError(searchResponse.Error));
    } else {
      yield put(loadNextPageSuccess(searchResponse));
    }
  } catch (err) {
    yield put(searchError(err));
  }
}

function* searchMovie() {
  const searchValue = yield select(state => state.movieSearch.searchValue);
  const response = yield call(fetch, API_SEARCH + searchValue + API_PAGE + 1);
  try {
    let searchResponse = yield response.json();
    if (searchResponse.Error) {
      yield put(searchError(searchResponse.Error));
    } else {
      yield put(initSearchSuccess(searchResponse));
    }
  } catch (err) {
    yield put(searchError(err.Error));
  }
}

export default watchSearchMovie;

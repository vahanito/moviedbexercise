import { all } from '@redux-saga/core/effects';
import watchMovieDetail from './movie_detail_saga';
import watchSearchMovie from './search_movie_saga';

export default function* rootSaga() {
  yield all([
    watchMovieDetail(),
    watchSearchMovie()
  ])
}

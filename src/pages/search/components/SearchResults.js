import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieOverview from './MovieOverview';
import InfiniteScroll from 'react-infinite-scroller';
import { loadNextPage } from '../../../actions/search_movie_actions';
import Error from '../../../components/Error';

const SearchResults = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieSearch.movies);
  const error = useSelector(state => state.movieSearch.error);
  const hasMore = useSelector(state => state.movieSearch.hasMore);
  let content = undefined;
  if (error) {
    return <Error error={error}/>;
  } else if (movies) {
    content = movies.map(movie => <MovieOverview key={movie.imdbID} movie={movie}/>);
  }
  if (content === undefined) {
    return null;
  }

  const loadMore = () => {
    dispatch(loadNextPage());
  };

  return (
    <InfiniteScroll
      initialLoad={false}
      hasMore={hasMore}
      loadMore={loadMore.bind(this)}
    >
      {content}
    </InfiniteScroll>
  );
};

export default SearchResults;

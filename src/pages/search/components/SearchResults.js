import React from 'react';
import { useSelector } from 'react-redux';
import MovieOverview from './MovieOverview';

const SearchResults = () => {
  let movies = useSelector(state => state.movieSearch.movies);
  let error = useSelector(state => state.error);
  let content = undefined;
  if (error) {
    content = <p>{error}</p>;
  } else if (movies) {
    content = movies.map(movie => <MovieOverview key={movie.imdbID} movie={movie}/>)
                    .reduce((a, b) => [a, <hr key={a.imdbID + b.imdbID}/>, b]);
  }
  return (
    <>
      {content}
    </>
  );
};

export default SearchResults;

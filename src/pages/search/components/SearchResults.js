import React from 'react';
import { connect } from 'react-redux';
import MovieOverview from './MovieOverview';

const SearchResultsComponent = ({movies, error}) => {
  let content = undefined;
  if (error) {
    content = <p>{error}</p>;
  } else if (movies) {
    content = movies.map(movie => <MovieOverview key={movie.imdbID} movie={movie}/>)
                    .reduce((a, b) => [a, <hr/>, b]);
  }
  return (
    <div>
      {content}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    error: state.error
  };
};

const SearchResults = connect(
  mapStateToProps
)(SearchResultsComponent);

export default SearchResults;

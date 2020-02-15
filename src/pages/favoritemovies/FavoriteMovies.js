import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavoriteMovies } from '../../actions/favorite_movies_actions';
import MovieOverview from '../search/components/MovieOverview';
import Loading from '../../components/Loading';

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavoriteMovies())
  }, []);

  let movies = useSelector(state => state.favoriteMovies.movies);

  let content = undefined;
  if (movies !== undefined) {
    if (!movies.length) {
      content = <div className="row justify-content-center"><h4>You do not have any favorite movies</h4></div>;
    } else {
      content = movies.map(movie => <MovieOverview key={movie.imdbID} movie={movie}/>)
                      .reduce((a, b) => [a, <hr key={a.imdbID + b.imdbID}/>, b]);
    }
  }
  return (
    <div className="container mt-2">
      <Loading loading={movies === undefined} />
      {content}
    </div>
  );
};

export default FavoriteMovies;

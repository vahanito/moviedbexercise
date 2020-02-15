import React, { useEffect } from 'react';
import { loadMovie } from '../../actions/movie_detail_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FavoriteMark from './FavoriteMark';

const MovieDetail = () => {
  const {movieId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, []);
  let movie = useSelector(state => state.movieDetail.movie);
  if (movie === undefined) {
    return 'Loading...';
  }
  return (
    <div className="container mt-2">
      {movie &&
      <div className="media">
        <img className="mr-3 shadow" src={movie.Poster} alt={movie.Title + ' poster'}/>
        <div className="media-body">
          <div className="row justify-content-start">
            <div className="col">
              <h3>{movie.Title} <FavoriteMark /></h3>
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Year: </strong>
            </div>
            <div className="col-3">
              {movie.Year}
            </div>
            <div className="col-2">
              <strong>Metascore: </strong>
            </div>
            <div className="col-2">
              {movie.Metascore}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Director: </strong>
            </div>
            <div className="col-3">
              {movie.Director}
            </div>
            <div className="col-2">
              <strong>IMDb Rating: </strong>
            </div>
            <div className="col-2">
              {movie.imdbRating}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Genre: </strong>
            </div>
            <div className="col-3">
              {movie.Genre}
            </div>
            <div className="col-2">
              <strong>Runtime </strong>
            </div>
            <div className="col-2">
              {movie.Runtime}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Production: </strong>
            </div>
            <div className="col">
              {movie.Production}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Writer: </strong>
            </div>
            <div className="col">
              {movie.Writer}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Actors: </strong>
            </div>
            <div className="col">
              {movie.Actors}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Awards: </strong>
            </div>
            <div className="col">
              {movie.Awards}
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Plot: </strong>
            </div>
            <div className="col">
              {movie.Plot}
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default MovieDetail;

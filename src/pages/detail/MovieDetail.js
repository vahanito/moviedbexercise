import React, { useEffect } from 'react';
import { loadMovie } from '../../actions/movie_detail_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import FavoriteMark from './FavoriteMark';

const MovieDetail = () => {
  const {movieId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, []);
  const movie = useSelector(state => state.movieDetail.movie);
  const error = useSelector(state => state.movieDetail.error);
  if (error) {
    return <Error error={error}/>;
  }
  return (
    <div className="container mt-2">
      <Loading loading={movie === undefined}/>
      {movie &&
      <div className="row">
        <div className="col-md-3 text-md-right col-lg-4 text-lg-left">
          <img className="shadow img-fluid" src={movie.Poster} alt={movie.Title + ' poster'}/>
        </div>
        <div className="col-md-9 text-md-left col-lg-8 text-lg-left">
          <div className="row justify-content-start">
            <div className="col">
              <h3>{movie.Title} <FavoriteMark/></h3>
            </div>
          </div>
          <div className="row justify-content-start pt-2">
            <div className="col-2">
              <strong>Year: </strong>
            </div>
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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
      </div>
      }
    </div>
  );
};

export default MovieDetail;

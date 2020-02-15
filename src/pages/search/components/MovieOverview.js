import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieOverview = ({movie}) => {
  return (
    <Link to={'/movie/' + movie.imdbID}>
      <div className="row align-items-center">
        <div className="col">
          <img src={movie.Poster} alt={movie.Title + ' poster'} height="200" width="150"/>
        </div>
        <div className="col">
          {movie.Title}
        </div>
        <div className="col">
          {movie.Year}
        </div>
      </div>
      <hr/>
    </Link>
  );
};

MovieOverview.propTypes = {
  movie: PropTypes.object
};

export default MovieOverview;

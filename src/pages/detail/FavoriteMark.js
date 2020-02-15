import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions/movie_detail_actions';

const FavoriteMark = () => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movieDetail.movie);
  const isFavorite = useSelector(state => state.movieDetail.isFavorite);
  return isFavorite ? (<i className="fa fa-star star" aria-hidden="true" onClick={() => dispatch(removeFromFavorites(movie))}/>)
                    : (<i className="fa fa-star-o star" aria-hidden="true" onClick={() => dispatch(addToFavorites(movie))}/>);
};

export default FavoriteMark;

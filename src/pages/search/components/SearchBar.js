import React from 'react';
import { initSearch, updateSearchValue } from '../../../actions/search_movie_actions';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.movieSearch.searchValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(initSearch());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search movies..." aria-label="Search movies" aria-describedby="button-search"
               value={searchValue}
               onChange={event => dispatch(updateSearchValue(event.target.value))}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
                  type="button" id="button-search"
                  onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

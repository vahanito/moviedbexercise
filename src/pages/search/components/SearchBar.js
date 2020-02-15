import React, { useState } from 'react';
import { initSearch } from '../../../actions/search_movie_actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(initSearch(searchValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search movies..." aria-label="Search movies" aria-describedby="button-search"
               value={searchValue}
               onChange={event => setSearchValue(event.target.value)}/>
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

import React, { useState } from 'react';
import { initSearch } from '../../../actions/search_movie_actions';
import { connect, useDispatch } from 'react-redux';

const Search = () => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    initSearch: searchValue => dispatch(initSearch(searchValue))
  };
};

const SearchBar = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchBar;

import React from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const Search = () => {
  return (
    <div className="container mt-2">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;

import React from 'react';

import './Search.css';

const Search = ({ searchFact }) => {
  const searchFactHandler = (e) => {
    searchFact(e.target.value);
  };

  return (
    <div className='search-widget'>
      <h4>Give a look at below dog facts</h4>
      <input
        type='text'
        className='seacrh-input'
        placeholder='Search facts globally...'
        onChange={searchFactHandler}
      />
    </div>
  );
};

export default Search;

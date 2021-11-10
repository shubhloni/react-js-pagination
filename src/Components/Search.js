import React from 'react';

import './Search.css';

const Search = () => {
  return (
    <div className='search-widget'>
      <h4>Give a look at below dog facts</h4>
      <input
        type='text'
        className='seacrh-input'
        placeholder='Search facts...'
      />
    </div>
  );
};

export default Search;

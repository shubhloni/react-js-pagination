import React from 'react';
import './Header.css';

import Search from './Search';

const Header = ({ searchFact }) => {
  return (
    <header>
      <div className='header'>
        <h1>React Pagination Demo</h1>
      </div>
      <Search searchFact={searchFact} />
    </header>
  );
};

export default Header;

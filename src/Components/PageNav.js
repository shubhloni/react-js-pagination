import React from 'react';

import './PageNav.css';

const PageNav = ({ pageCount, maxPageCount, changePage }) => {
  const prevPageHandler = () => {
    changePage('prev');
  };

  const nextPageHandler = () => {
    changePage('next');
  };

  return (
    <div className='page-nav'>
      <button
        className='prev'
        onClick={prevPageHandler}
        disabled={pageCount === 1 ? true : false}
      >
        prev
      </button>
      <button
        className='next'
        onClick={nextPageHandler}
        disabled={pageCount === maxPageCount ? true : false}
      >
        next
      </button>
    </div>
  );
};

export default PageNav;

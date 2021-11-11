import React from 'react';
import ListItem from './ListItem';
import Search from './Search';

function ListItems({ facts, pageCount, changeFact }) {
  return (
    <>
      {facts.map((fact, index) => {
        return (
          <ListItem
            key={fact._id}
            idx={pageCount !== 1 ? (pageCount - 1) * 10 + index : index}
            fact={fact}
            changeFact={changeFact}
          />
        );
      })}
    </>
  );
}

export default ListItems;

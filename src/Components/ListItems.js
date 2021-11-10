import React from 'react';
import ListItem from './ListItem';
import Search from './Search';

function ListItems({ facts, changeFact }) {
  return (
    <>
      <Search />

      {facts.map((fact) => {
        return <ListItem key={fact.id} fact={fact} changeFact={changeFact} />;
      })}
    </>
  );
}

export default ListItems;

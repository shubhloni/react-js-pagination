import React, { useState, useRef } from 'react';

import './ListItem.css';

function ListItem({ fact, changeFact }) {
  const [editToggle, setEditToggle] = useState(true);
  const textRef = useRef(null);

  const editToggleHandler = () => {
    setEditToggle(!editToggle);
  };

  const saveFactHandler = () => {
    // console.log(textRef.current.value);
    changeFact(fact.id, textRef.current.value);
  };

  const deleteFactsHandler = () => {
    changeFact(fact.id, '', true);
  };

  return (
    <div className='item'>
      <div className='item-top'>
        <label className='text-label'>Fact {fact.id}</label>
        <div className='text-actions'>
          <button className='btn edit' onClick={editToggleHandler}>
            edit
          </button>
          {editToggle ? (
            ''
          ) : (
            <button className='btn save' onClick={saveFactHandler}>
              save
            </button>
          )}
          <button className='btn delete' onClick={deleteFactsHandler}>
            delete
          </button>
        </div>
      </div>
      <textarea
        id='1'
        cols='30'
        rows='2'
        className='text-area'
        ref={textRef}
        disabled={editToggle ? 1 : 0}
        // value={fact.text}
        // value={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, alias! Maiores ex culpa inventore quae eveniet delectus, molestias possimus debitis.`}
      >
        {fact.text}
      </textarea>
    </div>
  );
}

export default ListItem;

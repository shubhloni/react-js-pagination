import React, { useState, useRef } from 'react';

import './ListItem.css';

function ListItem({ idx, fact, changeFact }) {
  const [editToggle, setEditToggle] = useState(true);
  const textRef = useRef(null);

  const editToggleHandler = () => {
    setEditToggle(!editToggle);
  };

  const saveFactHandler = () => {
    // console.log(textRef.current.value);
    setEditToggle(!editToggle);
    changeFact(fact._id, textRef.current.value);
  };

  const deleteFactsHandler = () => {
    changeFact(fact._id, '', true);
  };

  return (
    <div className='item'>
      <div className='item-top'>
        <label className='text-label'>Fact: {idx + 1}</label>
        <div className='text-actions'>
          {editToggle ? (
            <button className='btn edit' onClick={editToggleHandler}>
              <i class='fas fa-edit'></i>
            </button>
          ) : (
            <button className='btn save' onClick={saveFactHandler}>
              <i class='fas fa-save'></i>
            </button>
          )}
          <button className='btn delete' onClick={deleteFactsHandler}>
            <i class='fas fa-trash-alt'></i>
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
      >
        {fact.text}
      </textarea>
    </div>
  );
}

export default ListItem;

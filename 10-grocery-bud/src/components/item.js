import React from 'react';

const Items = ({ items, handleClick }) => {

  const clickEdit = (item) => {
    handleClick('edit', item)
  }

  const clickErase = (item) => {
    handleClick('delete', item)
  }

  return (
    <div id="item-container">
      {items.map((item, index) => 
        <div className="item" key={index}>
          <p>{item}</p>
          <button className="edit-btn" onClick={() => clickEdit(item)}>✍︎</button>
          <button className="erase-btn" onClick={() => clickErase(item)}>✘</button>
        </div>)}
    </div>
    
  )
}

export default Items;
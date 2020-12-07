import React from 'react';

const List = ({ births }) => {
  return (
    <ul className="birth-list">
      {births.map(birth => 
        <li key={birth.id}>
          <img src={birth.image} className="birth-img" alt={birth.name}/>
          <div className="birth-content">
            <strong>{birth.name}</strong>
            <p>{birth.age} years</p>
          </div>
        </li>
      )}
    </ul>
  )
}

export default List;
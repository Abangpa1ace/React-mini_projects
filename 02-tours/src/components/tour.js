import React, { useState } from 'react';

const Tour = ({ tour, handleClick }) => {
  const { id, price, image, name, info } = tour;
  const beforeInfo = info.substring(0,200);
  const afterInfo = info.substring(201, info.length);
  const [long, setLong] = useState(false);

  return (
    <article className="tour-item" key={id}>
      <img src={image} alt={id} className='item-img'/>
        <div className="item-explain">
          <h4>{name}<span className="item-price">${price}</span></h4>
          <div className="item-info">
            <p>{beforeInfo}
              {!long && <span>...</span>}
              {long && afterInfo}
              <button className="elongation" onClick={() => {long ? setLong(false) : setLong(true)}}>
                {!long ? 'Read More' : 'Read Less'}
              </button>
            </p>
          </div>
          <button className="delete-btn" onClick={() => handleClick(id)}>Not Interested</button>
        </div>
    </article>
  )
}

export default Tour;
import React from 'react';

const Tour = ({ tour }) => {
  return (
    <article className="tour-item" key={tour.id}>
      <img src={tour.image} alt={tour.id} className='item-img'/>
        <div className="item-explain">
          <h4>{tour.name}<span className="item-price">${tour.price}</span></h4>
          <div className="item-info">
            <p>{tour.info}<div className="elongation">Read More</div></p>
          </div>
          <button className="delete-btn">Not Interested</button>
        </div>
    </article>
  )
}

export default Tour;
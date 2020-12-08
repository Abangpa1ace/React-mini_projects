import React from 'react';

const Review = ({}) => {
  return (
    <main className="tour-container">
      {tours.map(tour =>
        (<Tour tour={tour} handleClick={handleClick} key={tour.id} />)
      )}
    </main>
  )
}

export default Review;
import React from 'react';
import Tour from './tour'

const Tours = ({ tours, handleClick }) => {
  return (
    <main className="tour-container">
      {tours.map(tour =>
        (<Tour tour={tour} handleClick={handleClick} key={tour.id} />)
      )}
    </main>
  )
}

export default Tours;
import React from 'react';
import Tour from './tour'

const Tours = ({ tours }) => {
  return (
    <main className="tour-container">
      {tours.map(tour =>
        (<Tour tour={tour} />)
      )}
    </main>
  )
}

export default Tours;
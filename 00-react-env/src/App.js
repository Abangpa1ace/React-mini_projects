import './App.css';
import React, { useState } from 'react';
import Review from './components/review'
import data from './components/data'

function App() {
  const reviewList = data;
  const [reviewIndex, setReviewIndex] = useState(0);

  const changeIndex = (btnClass) => {
    let nextIndex;
    if (btnClass === 'btn-prev') {
      nextIndex = reviewIndex === 0 ? reviewList.length - 1 : (reviewIndex - 1) % 4
    }
    else if (btnClass === 'btn-next') {
      nextIndex = (reviewIndex + 1) % 4
    }
    else if (btnClass === 'btn-random') {
      while (reviewIndex !== nextIndex) {
        nextIndex = Math.floor(Math.random() * reviewList.length);
        break;
      }
    }
    setReviewIndex(nextIndex)
  }

  return (
    <section className="App">
      <h2>Our Reviews</h2>
      <Review review={reviewList[reviewIndex]} changeIndex={changeIndex}/>
    </section>
  );
}

export default App;
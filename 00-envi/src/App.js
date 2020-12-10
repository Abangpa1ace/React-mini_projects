import React, { useState, useEffect } from 'react';
import Review from './components/review'
import People from './components/data'

function App() {
  const [peoples, setPeoples] = useState();
  const [index, setIndex] = useState(0);
  setPeoples(People);
  
  // 정답 참고부분
  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, peoples]);
  // 정답 참고부분

  useEffect(() => {
    const indexInterval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(indexInterval)
  }, [index])


  return (
    <section className="App">
      <h2 className="title">Reviews</h2>
      <div id="container">
        <button className="slide-btn prev" onClick={() => setIndex(index - 1)}>◀︎</button>
        <article className="review-container">
          {peoples.map((people, peopleIndex) => {
            return <Review people={people} peopleIndex={peopleIndex} index={index} key={people.id}/>
          })}
        </article>
        <button className="slide-btn next" onClick={() => setIndex(index + 1)}>▶︎</button>
      </div>
    </section>
  );
}


export default App;
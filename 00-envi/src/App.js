import React from 'react';
import News from './components/news'

function App() {
  


  return (
    <div className="container">
      <h1>Search Hacker News</h1>
      <input className="search-bar" />
      <div className="page-controller">
        <button className="prev-btn">Prev</button>
        <span className="page-counter">1 of 50</span>
        <button className="next-btn">Next</button>
      </div>
      <section className="news-container">
        <News />
        <News />
      </section>
    </div>
  )
}

export default App
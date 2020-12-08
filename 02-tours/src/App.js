import './App.css';
import React, { useState, useEffect } from 'react';
import Tours from './components/tours'
import Loader from './components/loader'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project';

  const getTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
    setLoading(false);
  }

  useEffect(() => {
    getTours();
  }, [])

  const handleClick = (idx) => {
    const newTours = tours.filter(tour => tour.id !== idx);
    setTours(newTours)
  }

  return (
    <section className="App">
      {loading && <Loader />}
      {!loading && <h2>Our Tours</h2>}
      <Tours tours={tours} handleClick={handleClick} />
    </section>
  );
}

export default App;
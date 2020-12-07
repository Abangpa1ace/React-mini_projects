import './App.css';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader'
import Tours from './components/tours'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project';

  const getTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
  }

  getTours();

  useEffect(() => {
    setLoading(false);
  }, [tours])

  return (
    <section className="App">
      <h1>Our Tours</h1>
      <Tours tours={tours} />
    </section>
  );
}

export default App;
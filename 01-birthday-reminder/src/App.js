import './App.css';
import React, { useState } from 'react';
import List from './components/list'
import Data from './components/data'


function App() {
  const [birthList, setBirthList] = useState(Data);

  const handleClick = () => {
    setBirthList([]);
  }

  return (
    <div className="App">
      <div id="container">
        <h1>{birthList.length} birthdays today</h1>
        <List births={birthList} />
        <button className="clear-btn" onClick={handleClick}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
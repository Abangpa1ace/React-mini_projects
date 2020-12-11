import React, { useState, useEffect } from 'react';
import Items from './components/item'
import Alerter from './components/alerter'

function App() {
  const [write, setWrite] = useState('');
  const [items, setItems] = useState([]);
  const [condition, setCondition] = useState('add');
  const [alerting, setAlerting] = useState(false);
  const [beforeEdit, setBeforeEdit] = useState(null);

  const alertTimer = () => {
    setAlerting(true);
    setTimeout(() => {
      setAlerting(false)
      setCondition('add')
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (condition === 'edit') {
      let newItems = items;
      for (let i=0 ; i<newItems.length ; i++) {
        newItems[i] = newItems[i] === beforeEdit ? write : newItems[i]
      }
      setItems(newItems)
      setWrite('');
      alertTimer()
    }
    else {
      setItems([...items, write]);
      setWrite('');
      alertTimer()
    }
  }
  
  const handleClick = (con, item) => {
    setCondition(con);
    if (con === 'delete') {
      alertTimer();
      setItems(items.filter(ele => ele !== item))
    }
    else if (con === 'edit') {
      setWrite(item);
      setBeforeEdit(item);
    }
  }

  const handleClear = () => {
    setItems([]);
    setCondition('clear')
    alertTimer()
  }

  return (
    <div className="App">
      <div id="container">
        {alerting && <Alerter condition={condition} />}
        <h2 className="title">Grocery Bud</h2>
        <form className="item-form" onSubmit={(e) => handleSubmit(e)}>
          <input 
            type='text' 
            placeholder="write item.." 
            className="item-input"
            value={write}
            onChange={(e) => setWrite(e.target.value)}></input>
          <button type="submit" condition={condition} className="item-btn">
            {condition === 'edit' ? 'Edit' : 'Submit'}
          </button>
        </form>
        <Items items={items} handleClick={handleClick} />
        {items.length > 0 && 
        <button className="clear-btn" onClick={handleClear}>Clear Items</button>}
      </div>
    </div>
  );
}

export default App;
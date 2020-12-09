import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar'
import Menu from './components/menu'
import data from './components/data'

function App() {
  const [menus, setMenus] = useState(data);

  let navList = ['all'];
  data.forEach(ele => {
    if (!navList.includes(ele.category)) {
      navList.push(ele.category)
    }
  })

  const navFilter = (nav) => {
    if (nav === 'all') {
      setMenus(data);
    }
    else {
      const newData = data.filter(ele => ele.category === nav)
      setMenus(newData);
    }
  }

  return (
    <div className="App">
      <h2>Our Menu</h2>
      <Navbar navList={navList} navFilter ={navFilter} />
      <main className="container">
        {menus.map(menu => {
          return (<Menu menu={menu} key={menu.id} />)
        })}
      </main>
    </div>
  );
}

export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader'
import Tab from './components/tab'

function App() {
  const url = 'https://course-api.com/react-tabs-project'

  const fetchTabs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTabs(data);
    setLoading(false);
  }
  
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTabs();
  }, [])

  const activeCompany = (idx) => {
    
    let newIndex;
    for (let i=0 ; i<tabs.length ; i++) {
      if (tabs[i].id === idx) {
        newIndex = i;
      }
    }
    setIndex(newIndex)
  }

  if (loading) {
    return (<Loader />)
  }
  else {
  return (
    <section className="App">
      <h2 className="title">Experience</h2>
      <div id="container">
        <aside className="company-container">
          {tabs.map(tab => 
            <button className="company-btn" key={tab.id} onClick={() => activeCompany(tab.id)}>{tab.company}</button>  
          )}
        </aside>
        <Tab {...tabs[index]}/>
      </div>
      <button className="more-btn">More Info</button>
    </section>
  );
  }

}

export default App;
import React, { useEffect, useState } from 'react'
import Lorem from './components/lorem';
import article from './components/data'

const updateDark = () => {
  let lightMode = false;
  if (localStorage.getItem('light-mode')) {
    lightMode = localStorage.getItem('light-mode');
  }
  return lightMode;
}

function App() {
  const [dark, setDark] = useState(updateDark());
  const changeDark = () => {
    setDark(!dark);
  }
  

  useEffect(() => {
    localStorage.setItem('light-mode', dark)
  }, [dark])

  return (
    <main className={`App ${dark && 'dark'}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-content">
            <h1>Overreacted</h1>
            <button onClick={changeDark}>Toggle</button>
          </div>
        </nav>
        <div className="lorem-container">
          {article.map(ele => 
            <Lorem key={ele.id} {...ele} />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
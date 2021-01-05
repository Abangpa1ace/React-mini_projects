import React, { useState, useEffect } from 'react';
import Loader from './components/loader';
import Profile from './components/profile';

function App() {
  const [load, setLoad] = useState(false);
  const [profs, setProfs] = useState([[],[],[],[],[],[],[],[],[],[]]);
  const [page, setPage] = useState(0);

  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

  const fetchData = async () => {
    setLoad(true);
    let profList = [[],[],[],[],[],[],[],[],[],[]];
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0 ; i < 10 ; i++) {
      for (let j = 0 ; j < 10 ; j++) {
        profList[i].push(data[i*10 + j]);
      }
    }
    setProfs(profList);
    setLoad(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const goPrev = () => {
    setPage((page === 0) ? profs.length - 1 : page - 1)
  }

  const goNext = () => {
    setPage((page + 1) % profs.length)
  }

  if (load) {
    return <Loader load={load} />
  }

  return (
    <div className="App">
      <h1>Pagination</h1>
      <div className="prof-container">
        {profs[page].map((prof) => {return <Profile profile={prof} />})}
      </div>
      <div className="btn-container">
        <button className="pn-btn" onClick={() => goPrev()}>prev</button>
        {profs.map((ele, idx) => {
          return <button className={`page-btn ${idx === page && 'show'}`} onClick={() => {setPage(idx)}}>{idx+1}</button>
        })}
        <button className="pn-btn" onClick={() => goNext()}>next</button>
      </div>
    </div>
  );
}

export default App;
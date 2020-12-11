import React, { useState } from 'react';
import Navigation from './components/navigation'
import { links, social } from './components/data'

function App() {
  const [Links, setLinks] = useState(links);
  const [Social, setSocials] = useState(social);

  return (
    <div className="App">
      <Navigation links={Links} social={Social}/>
    </div>
  );
}

export default App;
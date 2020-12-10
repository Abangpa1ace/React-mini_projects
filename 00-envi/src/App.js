import React, { useState } from 'react';
import Colors from './components/data'


function App() {
  const [color, setColor] = useState('#f15025');

  return (
    <section className="App">
      <form className="color-form" onSubmit>
        <span>Color Generator </span>
        <input type="text" placeholder={color}></input>
        <button type="submit">Submit</button>
      </form>
      <div id="container">
        <div className="color-box">
          <p>100%</p>
          <p>#ffffff</p>
        </div>
        <div className="color-box">
          <p>100%</p>
          <p>#ffffff</p>
        </div>
        <div className="color-box">
          <p>100%</p>
          <p>#ffffff</p>
        </div>
      </div>
    </section>
  );
}

export default App;
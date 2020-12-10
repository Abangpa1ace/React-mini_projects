import React, { useState } from 'react';
import Text from './components/data'
import Paragraph from './components/paragraph'

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const checkCount = (e) => {
    setCount(e.target.value);
    if (e.target.value > Text.length) {
      setCount(Text.length)
    }
  }

  const submitCount = (e) => {
    e.preventDefault();
    // 정답 참고부분
    setText(Text.slice(0, count))
  }

  return (
    <section className="App">
      <h3 className="title">Tired of Boring Lorem Ipsum?</h3>
      <form className="count-form" onSubmit={(e) => submitCount(e)}>
        <span>Paragraphs: </span>
        <input type="number" placeholder={count} onChange={(e) => checkCount(e)}></input>
        <button type="submit">Generate</button>
      </form>
      <div id="container">
        {text.map((paragraph, index) => 
          <Paragraph paragraph={paragraph} key={index} index={index} />)
        }
      </div>
    </section>
  );
}

export default App;
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [inputText, setInputText] = useState('# Markdown preview');

  const updateInput = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="App">
      <textarea type="textarea" className="input" value={inputText} onChange={updateInput} />
      <div className="output">
        {/* {inputText.split('\n').map(line => {
            if (line.substr(0,1) === '#') {
              if (line.length === 1) {
                return (<span></span>)
              }
              else if (line.substr(0,2) === '# ') {
                return (<h1>{line.substring(2, line.length)}<br/></h1>)
              }
              else {
                return (<span>{line}<br/></span>)
              }
            }
            else {
              return (<span>{line}<br/></span>)
            }
          })} */}
          <ReactMarkdown>{inputText}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
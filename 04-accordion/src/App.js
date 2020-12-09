import './App.css';
import React, { useState } from 'react';
import QuizList from './components/quizlist'
import data from './components/data'

function App() {
  const newData = data.map(ele => {
    return {...ele, more: false}
  })
  const [quizData, setQuizData] = useState(newData);
  
  const toggleMore = (id) => {
    const newQuizData = quizData;
    for (let i=0 ; i<newQuizData.length ; i++) {
      if (id === newQuizData[i].id) {
        newQuizData[i].more = (newQuizData[i].more ? false : true) 
      }
    }
    setQuizData(newQuizData)
  }

  return (
    <div className="App">
      <main className="container">
        <h2>Question And Answer About Login</h2>
        <QuizList quizlist={quizData} toggleMore={toggleMore} />
      </main>
    </div>
  );
}

export default App;
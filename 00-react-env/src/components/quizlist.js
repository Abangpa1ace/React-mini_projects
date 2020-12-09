import React from 'react';
import Quiz from './quiz'

const QuizList = ({ quizlist, toggleMore }) => {
  return (
    <section className="quiz-container">
      {quizlist.map (quiz => 
        <Quiz quiz={quiz} key={quiz.id} toggleMore={toggleMore} />  
      )}
    </section>
  )
}

export default QuizList;
import React, { useState } from 'react';

const Quiz = ({ quiz, toggleMore }) => {
  const [moreView, setMoreView] = useState(false);

  let { id, title, info, more } = quiz;

  const onClick = (moreView, id) => {
    moreView = !moreView ? true : false;
    setMoreView(moreView)
    toggleMore(id)
  }

  return (
    <article className="quiz">
      <div className="question">
        <h5>{title}</h5>
        <button className="more-btn" onClick={() => onClick(moreView, id)}>
          {moreView ? '-' : '+' }
        </button>
      </div>
      <div className="answer" style={{display: `${moreView ? 'block' : 'none'}`}}>
        {info}</div>
    </article>
  )
}

export default Quiz;
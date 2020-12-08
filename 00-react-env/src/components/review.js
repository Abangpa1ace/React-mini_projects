import React from 'react';

const Review = ({ review, changeIndex }) => {
  const { id, name, image, job, text } = review;
  return (
    <article className="review-container">
      <div className="img-container">
        <div className="comma">⏎</div>
        <img src={image} alt={id} className="review-img" />
        <div className="img-shadow"></div>
      </div>
      <h3>{name}</h3>
      <p className="review-job">{job}</p>
      <p className="review-text">{text}</p>
      <div className="btn-container">
        <button className="btn-prev" onClick={(e) => changeIndex(e.target.className)}>←</button>
        <button className="btn-next" onClick={(e) => changeIndex(e.target.className)}>→</button> 
      </div>
      <div className="btn-random" onClick={(e) => changeIndex(e.target.className)}>Suprise Me</div>
    </article>
  )
}

export default Review;
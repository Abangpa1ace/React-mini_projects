import React from 'react';

const Review = ({ people, peopleIndex, index }) => {
  // 정답 참고부분
  let position = 'nextSlide';
  if (peopleIndex === index) {
    position = 'activeSlide'
  }
  if (
    peopleIndex === index - 1 ||
    (index === 0 && peopleIndex === people.length - 1)
  ) {
    position = 'lastSlide';
  }
  // 정답 참고부분
  
  return (
      <div className={`review ${position}`}>
        <img src={people.image} alt={people.name} className="review-img"/>
        <h4 className="review-title">{people.name}</h4>
        <p>{people.title}</p>
        <p className="review-quote">{people.quote}</p>
        <div className='review-comma'>✣</div>
      </div>
  )
}

export default Review;
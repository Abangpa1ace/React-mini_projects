import React from 'react';

const News = () => {
  return (
    <article className="news">
      <h6>News title</h6>
      <p>{`point points by nickname | comment comments`}</p>
      <span><a href="/">Read More</a></span>
      <button>Remove</button>
    </article>
  )
}

export default News;
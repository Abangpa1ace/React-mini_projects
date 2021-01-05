import React from 'react'

const Lorem = ({ id, title, date, length, snippet }) => {
  const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  function convertOrdinalNumber(n) { 
    n = parseInt(n, 10); 
    const suffix = ['th', 'st', 'nd', 'rd']; 
    const mod100 = n % 100; 
    return n+(suffix[(mod100-20)%10] || suffix[mod100] || suffix[0]); 
  }
  return (
    <article className='lorem'>
      <h2>{title}</h2>
      <em>{`${dayArr[date.getDay()]} ${convertOrdinalNumber(date.getDate())}, ${date.getFullYear()}`}</em>
      <em>{`${length} min read`}</em>
      <p>{snippet}</p>
    </article>
  )
}

export default Lorem;
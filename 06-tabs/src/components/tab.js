import React from 'react';

const Tab = ({ id, title, company, dates, duties }) => {

  return (
    <article className="tab-container" key={id}>
      <h3>{title}</h3>
      <div className="tab-company">{company}</div>
      <p className="tab-dates">{dates}</p>
      <ul className="duty-list">
        {duties.map(duty => {
            return <li key={duty}><div>⌲</div><p>{duty}</p></li>
          }
        )}
      </ul>
    </article>
  )
}

export default Tab;
import React from 'react';

const Cocktail = ({ id, img, name, glass, alcohol }) => {
  return (
    <article className="cocktail">
      <img src={img} alt="cocktail" className="cocktail-img" />
      <footer>
        <h2 className="cocktail-name">{name}</h2>
        <p className="cocktail-glass">{glass}</p>
        <p className="cocktail-alcohol">{alcohol}</p>
        <button className="detail-btn">Details</button>
      </footer>
    </article>
  )
}

export default Cocktail;
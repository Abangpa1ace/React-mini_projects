import React from 'react';

const Menu = ({ menu }) => {
  const { img, title, price, desc } = menu;
  return (
    <article className="menu">
      <img src={img} alt={title} />
      <section className="menu-content">
        <div className="content-top">
          <h4>{title}</h4>
          <span>${Math.floor(price)}</span>
        </div>
        {desc}
      </section>
    </article>
  )
}

export default Menu;
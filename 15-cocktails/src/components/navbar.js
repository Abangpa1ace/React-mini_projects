import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-content">
        <h1>The <span>Cocktail</span> DB</h1>
        <ul className="nav-menus">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/more">More</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
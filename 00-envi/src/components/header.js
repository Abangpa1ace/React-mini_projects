import React from 'react';
import sublinks from './data';

const Header = () => {
  return (
    <header id='header'>
      <svg className="logo"></svg>
      <nav className="nav-bar">
        {sublinks.map(sublink => 
          <div className={`menu menu-${sublink.page}`}>{sublink.page}</div>)}
      </nav>
      <button className="sign-btn">Sign in</button>
    </header>
  )
}

export default Header;
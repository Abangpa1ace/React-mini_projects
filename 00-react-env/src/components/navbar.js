import React from 'react';

const Navbar = ({ navList, navFilter }) => {
  return (
    <nav className="menu-nav">
      {navList.map(nav => 
        <button onClick={() => navFilter(nav)}>{nav}</button>
      )}
    </nav>
  )
}

export default Navbar;
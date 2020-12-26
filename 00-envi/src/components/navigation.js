import React from 'react';
import { GiShoppingBag } from 'react-icons/gi'
import { useGlobalContext } from './context';


const Navigation = () => {
  const { amount } = useGlobalContext();
  return (
    <nav id="navbar">
      <div className="nav-content">
        <h1>UseReducer</h1>
        <span className="bag-icon">
          <GiShoppingBag />
          <div className="bag-counter">
            {amount}
          </div>
        </span>
      </div>
    </nav>
  )
}

export default Navigation;
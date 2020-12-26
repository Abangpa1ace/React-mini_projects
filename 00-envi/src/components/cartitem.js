import React from 'react';
import { useGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount}) => {
  const { removeItem, toggleAmount } = useGlobalContext();
  return (
    <article className="item">
      <div className="item-left">
        <img src={img} alt={title} />
        <div className="item-context">
          <p className="item-title">{title}</p>
          <p className="item-price">${price}</p>
          <button className="remove-btn" onClick={() => removeItem(id)}>remove</button>
        </div>
      </div>
      <div className="item-right">
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>↑</button>
        <p className="item-amount">{amount}</p>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>↓</button>
      </div>
    </article>
  )
};

export default CartItem;
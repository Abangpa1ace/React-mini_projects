import React from 'react';
import CartItem from './cartitem';
import { useGlobalContext } from './context';

const Cart = () => {
  const { cart, clearCart, total } = useGlobalContext();
  
  if (cart.length === 0) {
    return (
      <div id="container">
        <h1>Your Bag</h1>
        <h3 className="empty-msg">is currently empty..!</h3>
      </div>
    )
  }

  return (
    <div id="container">
      <h1>Your Bag</h1>
      <div className="cart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <div className="total-container">
        <p>Total</p>
        <p>$<span class="total-calculator">{total}</span></p>
      </div>
      <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart;
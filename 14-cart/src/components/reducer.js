const reducer = (state, action) => {
  let type = action.type;
  if (type === 'clear') {
    return {...state, cart: []}
  }
  else if (type === 'remove') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }
  else if (type === 'increase') {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {...item, amount: item.amount + 1}
      }
      return item
    })
    return {...state, cart: newCart}
  }
  else if (type === 'decrease') {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {...item, amount: item.amount - 1}
      }
      return item
    }).filter((item) => item.amount !== 0)
    return {...state, cart: newCart}
  }
  else if (type === 'calculate') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal
      }, 
      {total: 0, amount: 0}     //initial value
    )
    total = parseFloat(total.toFixed(2))

    return {...state, total, amount}
  }
  else if (type === 'loading') {
    return {...state, loading: true}
  }
  else if (type === 'display_items') {
    return {...state, cart: action.payload, loading: false}
  }
  else if (type === 'toggle_amount') {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return {...item, amount: item.amount + 1}
        }
        else if (action.payload.type === 'dec') {
          return {...item, amount: item.amount - 1}
        }
      }
      return item
    }).filter((item) => item.amount !== 0)
    return {...state, cart: newCart}
  }
  throw new Error('no matching action type')
}

export default reducer;
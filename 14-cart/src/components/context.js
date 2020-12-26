import React, { useEffect, useContext, useReducer } from 'react';
import Data from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: Data,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  
  const onLoad = () => {
    dispatch({ type: 'loading' })
  }

  const clearCart = () => {
    dispatch({ type: 'clear' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'remove', payload: id })
  }

  const incItem = (id) => {
    dispatch({ type: 'increase', payload: id })
  }

  const decItem = (id) => {
    dispatch({ type: 'decrease', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'loading' })
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: 'display_items', payload: cart})
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'toggle_amount', payload: {id, type}})
  }

  
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    dispatch({ type: 'calculate' })
  }, [state.cart])

  return (
    <AppContext.Provider value={{
      ...state, clearCart, removeItem, incItem, decItem, toggleAmount}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
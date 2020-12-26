import React from 'react';
import { useGlobalContext } from './components/context';
import Loader from './components/loader';
import Navigation from './components/navigation';
import Cart from './components/cart';

function App() {
  const { loading } = useGlobalContext();
  
  if (loading) {
    return(<Loader />);
  }

  return (
    <div className="App">
      <Navigation />
      <Cart />
    </div>
  );
}

export default App;
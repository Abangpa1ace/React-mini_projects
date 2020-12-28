import React from 'react';
import Navbar from '../components/navbar';
import Search from '../components/search';
import CocktailList from '../components/cocktail-list'

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Search />
      <CocktailList />
    </div>
  );
}

export default Home;
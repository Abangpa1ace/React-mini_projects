import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { updateSearch } = useGlobalContext();

  return (
    <form className="search-form">
      <label className="search-title">Search Your Favorite Cocktail</label>
      <input type="text" className="search-input" onChange={updateSearch}/>
    </form>
  )
}

export default Search;
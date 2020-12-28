import React from 'react';
import { useGlobalContext } from './context';
import Loader from './loader';
import Cocktail from './cocktail';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  const showCocktails = () => {
    if (loading) {
      return <Loader />
    }
    else if (cocktails.length === 0) {
      return <h2>No Cocktails Matched Your Search Criteria</h2>
    }
    else {
      return (
        <section className="cocktail-container">
          {cocktails.map(ele => <Cocktail key={ele.id} {...ele} />)}
        </section>
      )
    }
  }
  return (
    <main>
      {showCocktails()}
    </main>
  )
}

export default CocktailList;
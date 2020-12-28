import React, { useState, useEffect, useContext, useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const updateSearch = (e) => {
    setSearchVal(e.target.value);
  }

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url+searchVal);
    const data = await res.json();
    if (!data.drinks) {
      setCocktails([]);
    }
    else {
      const drinkList = data.drinks.map((drink) => 
      drink =  {
        id: drink['idDrink'],
        name: drink['strDrink'],
        glass: drink['strGlass'],
        alcohol: drink['strAlcoholic'],
        img: drink['strDrinkThumb']
      })
      setCocktails(drinkList);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [searchVal])

  return (
    <AppContext.Provider value={{ loading, cocktails, updateSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
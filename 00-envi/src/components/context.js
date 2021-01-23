import React, { useState, useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  searchValue: 'react',
  newsList: [],
  page: 0,
  nbPages: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <AppContext.Provider value>
      {children}
    </AppContext.Provider>
  ) 
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
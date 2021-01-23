import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state, 
        loading: true
      }
    
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        newsList: action.payload.newsList,
        nbPages: action.payload.nbPages,
      }

    case REMOVE_STORY:
      return {
        ...state,
        newsList: state.newsList.filter((news) => news.objectID !== action.payload),
      }

    case HANDLE_SEARCH:
      return {
        ...state,
        searchValue: action.payload.searchValue,
        page: 0,
      }

    case HANDLE_PAGE:
      const changePage = (action.payload === 'next')
        ? (state.page + 1) % state.nbPages 
        : (state.page === 0 ? state.nbPages - 1 : state.page - 1)

      return {
        ...state,
        page: changePage,
      }
    
    default:
      throw new Error(`no mathching "${action.type}" action type`)
  }
}

export default reducer;
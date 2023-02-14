import * as actionType from '../actions/actionTypes'

const INITIAL_STATE = {
  
}

const storeBooks = (state, action) => ({ ...state, ...action.data })

const BooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.BOOKS_STORE:
      return storeBooks(state, action)
    default:
      return state
  }
}

export default BooksReducer
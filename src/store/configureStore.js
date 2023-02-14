import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import reduxThunk from 'redux-thunk'

import auth from '../reducers/reducerAuth'
import books from '../reducers/reducerBooks'

const config = {
  key: 'westbike-storege',
  storage: AsyncStorage,
  whitelist: ['auth'],
  // blacklist: ['verification']
}

const rootReducers = combineReducers({
  auth,
  books
})

const reducers = persistReducer(config, rootReducers)
const store = createStore(reducers, {}, compose(applyMiddleware(reduxThunk)))
const persistor = persistStore(store)

const configureStore = () => {
  return { persistor, store }
}

export default configureStore;

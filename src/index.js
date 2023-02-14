import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import SplashScreen from 'react-native-splash-screen'
import { View } from 'react-native'
import NavigationStack from './App'
import configureStore from './store/configureStore'

import * as actionAuth from './actions/actionAuth';

const { persistor, store } = configureStore()

const Init = () => {
  const dataReducer = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return <NavigationStack />
}

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Init />
      </PersistGate>
    </Provider>
  )
}

export default Entrypoint
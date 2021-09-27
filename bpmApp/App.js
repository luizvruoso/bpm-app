import React, {useEffect, useState} from 'react';
import Routes from './src/containers/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {watchPosition} from './src/assets/utils';
export default function App() {
  useEffect(() => {
    watchPosition();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

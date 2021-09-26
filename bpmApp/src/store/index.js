import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './modules/rootReducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'user',
    'steps',
    'heartBeat',
    'heartBeatInstant',
    'stepsInstant',
    'emergencyContact',
    'monitored',
  ], //reducers que serao gravados
  //blacklist: [], //reducers que nao serao gravados
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};

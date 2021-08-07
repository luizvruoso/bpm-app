import {combineReducers} from 'redux';

import user from './user/Reducer';
import steps from './steps/Reducer';
import heartBeat from './heartBeat/Reducer';

const appReducer = combineReducers({
  user,
  heartBeat,
  steps,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

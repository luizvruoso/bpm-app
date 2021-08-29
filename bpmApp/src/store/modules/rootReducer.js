import {combineReducers} from 'redux';

import user from './user/Reducer';
import steps from './steps/Reducer';
import heartBeat from './heartBeat/Reducer';
import heartBeatInstant from './heartBeatInstant/Reducer';
import stepsInstant from './stepsInstant/Reducer';
const appReducer = combineReducers({
  user,
  heartBeat,
  steps,
  heartBeatInstant,
  stepsInstant,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

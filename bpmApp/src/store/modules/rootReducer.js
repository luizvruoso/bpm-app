import {combineReducers} from 'redux';

import user from './user/Reducer';
import steps from './steps/Reducer';
import heartBeat from './heartBeat/Reducer';
import heartBeatInstant from './heartBeatInstant/Reducer';
import stepsInstant from './stepsInstant/Reducer';
import emergencyContact from './emergencyContact/Reducer';
import monitored from './monitored/Reducer';

const appReducer = combineReducers({
  user,
  heartBeat,
  steps,
  heartBeatInstant,
  stepsInstant,
  emergencyContact,
  monitored,
});

const rootReducer = (state, action) => {
  if (action.type == 'SET_LOGOUT') {
    state.user = [];
    state.heartBeat = [];
    state.heartBeatInstant = [];
    state.steps = [];
    state.stepsInstant = [];
    state.emergencyContact = [];
    state.monitored = [];
    return appReducer(state, action);
  }

  return appReducer(state, action);
};

export default rootReducer;

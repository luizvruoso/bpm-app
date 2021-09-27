import {now} from '../../../assets/utils';
import {collectActualSteps} from './middlewares';
import {setSteps} from '../steps/Actions';
export function getActualSteps() {
  return dispatch => {
    /*dispatch(setLoadingData());
    collectActualSteps()
      .then(ret => {
        if (ret) {
          dispatch(setSteps(ret));
        }
      })
      .catch(err => {
        dispatch(setError(err));
        console.error('error while colleting instant steps information', err);
        return false;
      });*/
  };
}

export function setActualSteps(step) {
  return dispatch => {
    //dispatch(setLoadingData());
    const payload = {
      value: step,
      date: now(),
    };

    dispatch(setSteps(payload));
    dispatch(setInstantSteps(payload));
  };
}

function setInstantSteps(data) {
  return {
    type: 'SET_INSTANT_STEPS',
    payload: data,
  };
}

function setLoadingData() {
  return {
    type: 'SET_LOADING_DATA_INSTANT_STEPS',
    payload: {},
  };
}

function setError(err) {
  return {
    type: 'SET_ERROR_INSTANT_STEPS',
    payload: err,
  };
}

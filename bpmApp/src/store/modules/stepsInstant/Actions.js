import {collectActualSteps} from './middlewares';

export function getActualSteps() {
  return dispatch => {
    dispatch(setLoadingData());
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
      });
  };
}

function setSteps(data) {
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

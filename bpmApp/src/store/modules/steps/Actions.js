import {collectSteps} from './middlewares';

export function getSteps() {
  return dispatch => {
    dispatch(setLoadingData());
    collectSteps()
      .then(ret => {
        if (ret) {
          dispatch(setSteps(ret));
        }
      })
      .catch(err => {
        dispatch(setError(err));
        console.error('error while colleting steps information', err);
        return false;
      });
  };
}

export function setSteps(data) {
  return {
    type: 'SET_STEPS',
    payload: data,
  };
}

function setLoadingData() {
  return {
    type: 'SET_LOADING_DATA_STEPS',
    payload: {},
  };
}

function setError(err) {
  return {
    type: 'SET_ERROR_STEPS',
    payload: err,
  };
}

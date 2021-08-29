import {collectActualHeartBeatInfomation} from './middlewares';

export function getActualHeartBeatData() {
  return dispatch => {
    dispatch(setLoadingData());
    collectActualHeartBeatInfomation()
      .then(ret => {
        if (ret) {
          return dispatch(setHeartBeat(ret));
        }
      })
      .catch(err => {
        dispatch(setError(err));
        console.error('Error while colleting instant heart beat data', err);
      });
  };
}

function setHeartBeat(data) {
  return {
    type: 'SET_HEART_BEAT_INSTANT',
    payload: data,
  };
}

function setLoadingData() {
  return {
    type: 'SET_LOADING_DATA_INSTANT',
    payload: {},
  };
}

function setError(err) {
  return {
    type: 'SET_ERROR_INSTANT',
    payload: err,
  };
}

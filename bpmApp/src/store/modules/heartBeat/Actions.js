import {collectHeartBeatInfomation} from './middlewares';

export function getHeartBeatData() {
  return dispatch => {
    /* dispatch(setLoadingData());
    collectHeartBeatInfomation()
      .then(ret => {
        if (ret) {
          return dispatch(setHeartBeat(ret));
        }
      })
      .catch(err => {
        dispatch(setError(err));
        console.error('Error while colleting heart beat data', err);
      });
  };*/
  };
}

export function setHeartBeat(data) {
  return {
    type: 'SET_HEART_BEAT',
    payload: data,
  };
}

function setLoadingData() {
  return {
    type: 'SET_LOADING_DATA',
    payload: {},
  };
}

function setError(err) {
  return {
    type: 'SET_ERROR',
    payload: err,
  };
}

import {collectActualHeartBeatInfomation} from './middlewares';
import {now} from '../../../assets/utils';
export function getActualHeartBeatData() {
  return dispatch => {
    /*dispatch(setLoadingData());
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
  };*/
  };
}

export function setActualHeartBeat(value) {
  return dispatch => {
    //dispatch(setLoadingData());
    const payload = {
      value: value,
      date: now(),
    };
    console.log('foi', payload);

    dispatch(setHeartBeat(payload));
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

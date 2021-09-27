import {collectActualHeartBeatInfomation} from './middlewares';
import {now} from '../../../assets/utils';
import {setHeartBeat} from '../heartBeat/Actions';

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

    dispatch(setHeartBeat(payload));
    dispatch(setHeartBeatInstant(payload));
  };
}

function setHeartBeatInstant(data) {
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

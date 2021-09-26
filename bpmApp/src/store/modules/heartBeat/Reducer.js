import produce from 'immer';

export default function heartBeat(state = [], action) {
  switch (action.type) {
    case 'SET_HEART_BEAT':
      return action.payload;
    case 'SET_LOADING_DATA':
      return {
        status: 'loading',
      };
    case 'SET_ERROR':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}

import produce from 'immer';

export default function heartBeatInstant(state = [], action) {
  switch (action.type) {
    case 'SET_HEART_BEAT_INSTANT':
      return [...action.payload];
    case 'SET_LOADING_DATA_INSTANT':
      return {
        status: 'loading',
      };
    case 'SET_ERROR_INSTANT':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}

import produce from 'immer';

export default function stepsInstant(state = [], action) {
  switch (action.type) {
    case 'SET_INSTANT_STEPS':
      return action.payload;
    case 'SET_LOADING_DATA_INSTANT_STEPS':
      return {
        status: 'loading',
      };
    case 'SET_ERROR_INSTANT_STEPS':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}

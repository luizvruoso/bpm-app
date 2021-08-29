import produce from 'immer';

export default function steps(state = [], action) {
  switch (action.type) {
    case 'SET_STEPS':
      return action.payload;
    case 'SET_LOADING_DATA_STEPS':
      return {
        status: 'loading',
      };
    case 'SET_ERROR_STEPS':
      return {
        status: 'error',
        message: action.payload,
      };
    default:
      return state;
  }
}

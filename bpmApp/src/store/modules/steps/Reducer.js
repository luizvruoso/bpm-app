import produce from 'immer';

export default function steps(state = [], action) {
  switch (action.type) {
    case 'REGISTER_STEPS':
      return [...state, action.payload];

    default:
      return state;
  }
}

import produce from 'immer';

const INIT_STATE = [];

export default function monitored(state = INIT_STATE, action) {
  switch (action.type) {
    case 'REGISTER_CONTACT':
      return action.payload.data;
    default:
      return state;
  }
}

import produce from 'immer';

const INIT_STATE = {
  name: null,
  userInfo: {
    name: '',
    phone: '',
    birth: null,
    weight: '',
    height: '',
    sex: '',
    alzheimer: '',
    wheelchairUser: '',
  },
  loginMethod: null,
  userId: null,
  username: null,
  isAuthenticated: false,
  expiresIn: 0,
  error: false,
  loading: false,
  message: null,
  roles: null,
};

export default function user(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SET_SUCESS_LOGIN':
      return action.payload;
    case 'SET_FAILED_LOGIN':
      return action.payload;
    case 'SET_USER_INFO':
      return produce(state, draft => {
        draft.userInfo = action.payload.userInfo;
      });
    case 'SET_LOGOUT':
      return INIT_STATE;
    default:
      return state;
  }
}

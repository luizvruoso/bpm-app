import produce from 'immer';

const INIT_STATE = {
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
  step: 0,
  userId: null,
  username: null,
  token: null,
  refreshToken: null,
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
    case 'SET_STEP_TYPE_CODE':
      return produce(state, draft => {
        draft.loginMethod = 'phone';
        draft.userInfo.phone = action.payload.phone;
        draft.step = 1;
      });
    case 'SET_LOGOUT':
      return INIT_STATE;
    default:
      return state;
  }
}

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
  uuid: null,
};

export default function emergencyContact(state = INIT_STATE, action) {
  switch (action.type) {
    case 'REGISTER_CONTACT':
      return action.payload.data;
    default:
      return state;
  }
}

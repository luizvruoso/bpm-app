import produce from 'immer';

const INIT_STATE = {
  name: null,
  loginMethod: null,
  userId: null,
  username: null,
  isAuthenticated: false,
  alwaysLoggedIn: false,
  expires_in: 0,
  error: false,
  loading: false,
  message: null,
  roleDashboardMenu: [],
  roleTicketDetailsMenu: [],
  purgeDataDate: null,
};

export default function user(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

import {telAuth, logoutFetch} from './middlewares';

export function loginTelUser(tel) {
  return dispatch => {
    telAuth(tel)
      .then(ret => {
        if (ret != null) {
          return dispatch(sucessLogin(ret));
        }
      })
      .catch(err => {
        console.error(err);

        return dispatch(failedLogin());
      });
  };
}

export function logout(tel) {
  return dispatch => {
    logoutFetch(tel)
      .then(ret => {
        if (ret != null) {
          return dispatch(logoutAction());
        }
      })
      .catch(err => {
        console.error(err);

        return dispatch(failedLogin());
      });
  };
}

function failedLogin() {
  return {
    type: 'SET_FAILED_LOGIN',
    payload: {
      name: null,
      loginMethod: null,
      userId: null,
      username: null,
      isAuthenticated: false,
      expiresIn: 0,
      error: false,
      loading: false,
      message: null,
      roles: null,
    },
  };
}

function logoutAction() {
  return {
    type: 'SET_LOGOUT',
    payload: {
      name: null,
      loginMethod: null,
      userId: null,
      username: null,
      isAuthenticated: false,
      expiresIn: 0,
      error: false,
      loading: false,
      message: null,
      roles: null,
    },
  };
}

function sucessLogin(data) {
  return {
    type: 'SET_SUCESS_LOGIN',
    payload: {
      name: data.name,
      loginMethod: data.loginMethod,
      userId: data.userId,
      username: data.username,
      isAuthenticated: data.isAuthenticated,
      expiresIn: data.expiresIn,
      error: data.error,
      loading: data.loading,
      message: data.message,
      roles: data.roles,
    },
  };
}

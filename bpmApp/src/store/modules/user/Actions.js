import {sendCodeTel, logoutFetch, authenticateUserToken} from './middlewares';

export function sendTokenTel(tel) {
  return dispatch => {
    sendCodeTel(tel)
      .then(ret => {
        if (ret != null) {
          console.warn(ret);

          //return dispatch(sucessLogin(ret));
        }
      })
      .catch(err => {
        console.error(err);

        return dispatch(failedLogin());
      });
  };
}

export function validateToken(tel, auth) {
  return dispatch => {
    authenticateUserToken(tel, auth)
      .then(ret => {
        if (ret != null) {
          console.log(ret);

          //return dispatch(sucessLogin(ret));
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

export function saveUserData(data) {
  return dispatch => {
    if (data != null) {
      dispatch(saveUserDataAction(data));
    }
  };
}

function saveUserDataAction(data) {
  return {
    type: 'SET_USER_INFO',
    payload: {
      userInfo: data,
    },
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
      userInfo: {
        name: '',
        phone: '',
        birth: '',
        weight: '',
        height: '',
        sex: '',
        alzheimer: '',
        wheelchairUser: '',
      },
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

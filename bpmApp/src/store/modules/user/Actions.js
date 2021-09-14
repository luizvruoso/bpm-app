import {sendCodeTel, logoutFetch, authenticateUserToken} from './middlewares';

export function sendTokenTel(phone) {
  return dispatch => {
    //return dispatch(setStepTypeCode(phone));
    sendCodeTel(phone)
      .then(ret => {
        if (ret != false) {
          //return dispatch(setStepTypeCode(phone));
        } else {
          console.warn(ret);
        }
      })
      .catch(err => {
        console.error(err);

        return dispatch(failedLogin());
      });
  };
}

export function validateToken(phone, auth) {
  return dispatch => {
    authenticateUserToken(phone, auth)
      .then(ret => {
        if (ret != false) {
          const aux = {
            name: '',
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
            loginMethod: 'phone',
            userId: ret.data.id,
            username: ret.data.username,
            isAuthenticated: true,
            expiresIn: null,
            token: ret.data.token,
            refreshToken: null,
            error: null,
            loading: null,
            message: null,
            roles: null,
          };
          return dispatch(sucessLogin(aux));
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

function setStepTypeCode(phone) {
  return {
    type: 'SET_STEP_TYPE_CODE',
    payload: {
      phone: phone,
    },
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
      token: data.token,
      refreshToken: data.refreshToken,
      loading: data.loading,
      message: data.message,
      roles: data.roles,
    },
  };
}

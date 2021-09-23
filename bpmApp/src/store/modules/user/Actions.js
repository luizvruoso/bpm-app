import {
  sendCodeTel,
  logoutFetch,
  authenticateUserToken,
  saveUserData,
} from './middlewares';
import {convertDate} from '../../../assets/utils';

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
            roles: ret.data.roles.length > 0 ? ret.data.roles : null,
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

export function registerUserData(data) {
  return dispatch => {
    const payload = {
      //username: data.username,
      //email: null,
      //phone: data.phone,
      //password: null,
      birthDate: convertDate(data.birth, true),
      completeName: data.name,
      weight: data.weight,
      height: 0,
      sex: data.sex == 'male' ? true : false,
      isWheelChairUser: data.wheelchairUser,
      hasAlzheimer: data.alzheimer,
    };
    saveUserData(payload)
      .then(ret => {
        dispatch(saveUserRole(ret.data.roles));
      })
      .catch(err => {
        return false;
      });
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

function saveUserRole(data) {
  return {
    type: 'SET_USER_ROLE',
    payload: {
      roles: data,
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

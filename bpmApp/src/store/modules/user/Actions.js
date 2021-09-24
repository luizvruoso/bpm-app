import {
  sendCodeTel,
  logoutFetch,
  authenticateUserToken,
  saveUserData,
  addEmergencyContact,
  getUserData,
} from './middlewares';
import {convertDate} from '../../../assets/utils';

export function sendTokenTel(phone) {
  return async dispatch => {
    //return dispatch(setStepTypeCode(phone));
    try {
      const ret = await sendCodeTel(phone);
    } catch (err) {
      console.error(err);

      return dispatch(failedLogin());
    }
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
  return async dispatch => {
    const payload = {
      //username: data.username,
      //email: null,
      //phone: data.phone,
      //password: null,
      birthDate: convertDate(data.birth, false),
      completeName: data.name,
      weight: parseInt(data.weight),
      height: parseInt(data.height),
      sex: data.sex,
      isWheelChairUser: data.wheelchairUser,
      hasAlzheimer: data.alzheimer,
    };
    console.log(payload);
    try {
      const ret = await saveUserData(payload);
      const actionPayload = {
        userInfo: {
          name: data.name,
          phone: data.username,
          birth: data.birth,
          weight: data.weight,
          height: data.height,
          sex: data.sex,
          alzheimer: data.alzheimer,
          wheelchairUser: data.wheelchairUser,
        },
        roles: ret.data.roles,
        uuid: ret.data.uuid,
      };

      dispatch(saveDataAction(actionPayload));
    } catch (err) {
      console.log(err);
      return dispatch(logoutAction());
    }
  };
}

export function addUserEmergencyContact(data) {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);

      const userData = await getUserData();

      const actionPayload = {
        userInfo: {
          name: userData.data.completeName,
          phone: userData.data.phone,
          birth: userData.data.birthDate,
          weight: userData.data.weight,
          height: userData.data.height,
          sex: userData.data.sex,
          alzheimer: userData.data.hasAlzheimer,
          isWheelchairUser: userData.data.isWheelchairUser,
        },
        roles: [userData.data.roles[0], 'ROLE_RESPONSIBLE'],
        uuid: userData.data.uuid,
      };
      console.log('dsadas11', actionPayload);

      dispatch(saveDataAction(actionPayload));
    } catch (err) {
      console.error(err);

      //return dispatch(failedLogin());
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

function saveDataAction(data) {
  return {
    type: 'SET_USER_DATA',
    payload: {
      data,
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

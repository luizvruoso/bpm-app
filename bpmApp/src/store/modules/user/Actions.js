import {
  sendCodeTel,
  logoutFetch,
  authenticateUserToken,
  saveUserData,
  addEmergencyContact,
  getUserData,
} from './middlewares';
import {convertDate, now} from '../../../assets/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function sendTokenTel(phone) {
  return async dispatch => {
    //return dispatch(setStepTypeCode(phone));
    try {
      const ret = await sendCodeTel(phone);
    } catch (err) {
      dispatch(
        setErrorMessage(
          'Erro ao enviar token, verifique seu telefone e tente novamente.',
        ),
      );
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
        dispatch(
          setErrorMessage('Erro ao validar token \n' + err.customMessage),
        );
        //return dispatch(failedLogin());
      });
  };
}

export function logout(tel) {
  return async dispatch => {
    try {
      const firstPair = ['@token', null];
      const secondPair = ['@refreshToken', null];

      await AsyncStorage.multiSet([firstPair, secondPair]);

      return dispatch(logoutAction());
    } catch (err) {
      return dispatch(logoutAction());
    }
  };
}

export function registerUserData(data) {
  return async dispatch => {
    const payload = {
      //username: data.username,
      //email: null,
      //phone: data.phone,
      //password: null,
      //birthDate: convertDate(data.birth, false),
      birthDate: convertDate(now(), false),
      completeName: data.name,
      weight: parseInt(data.weight),
      height: parseInt(data.height),
      sex: data.sex,
      isWheelchairUser: data.wheelchairUser,
      hasAlzheimer: data.alzheimer,
    };
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
      const firstPair = ['@token', ret.data.token];
      const secondPair = ['@refreshToken', ret.data.refreshToken];

      await AsyncStorage.multiSet([firstPair, secondPair]);

      dispatch(saveDataAction(actionPayload));
    } catch (err) {
      console.log(err);
      dispatch(
        setErrorMessage(
          'Erro ao enviar cadastro, tente novamente mais tarde. \n' +
            err.customMessage,
        ),
      );
      return dispatch(logoutAction());
    }
  };
}

export function refreshUserInfo(data = null) {
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
        roles: userData.data.roles,
        uuid: userData.data.uuid,
      };

      dispatch(saveDataAction(actionPayload));
    } catch (err) {
      console.error(err);

      //return dispatch(failedLogin());
    }
  };
}

export function setErrorMessage(message) {
  return {
    type: 'SET_ERROR_MESSAGE',
    payload: {
      message,
    },
  };
}

export function setSuccessMessage(message) {
  return {
    type: 'SET_SUCCESS_MESSAGE',
    payload: {
      message,
    },
  };
}

export function setPhoneAuth(data) {
  return {
    type: 'SET_PHONE_AUTH',
    payload: {
      phone: data.phone,
    },
  };
}

export function setErrorToFalse() {
  return {
    type: 'ERROR_TO_FALSE',
  };
}

export function setSuccessToFalse() {
  return {
    type: 'SUCCESS_TO_FALSE',
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
    type: 'SET_SUCCESS_LOGIN',
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

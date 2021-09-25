import {fetchAPI, fetchAPILogin} from '../../../../services/api';
import {URL_API} from '../../../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function sendCodeTel(tel) {
  return fetchAPILogin(
    'POST',
    URL_API.AUTH.SEND_CODE,
    {phoneNumber: '55' + tel},
    null,
  )
    .then(ret => {
      if (ret?.status == 200) return ret.data;
      return false;
    })
    .catch(err => {
      return false;
    });

  /* return new Promise((resolve, reject) => {
    let aux = {
      name: 'Jorge Felicio',
      loginMethod: 'tel',
      userId: '#123',
      username: 'jorginhoDaMassa',
      isAuthenticated: true,
      expiresIn: 1632964699,
      error: false,
      loading: false,
      message: null,
      roles: 'all',
    };

    return setTimeout(() => {
      return resolve(aux);
    }, 500);
  });*/
}

export async function authenticateUserToken(tel, auth) {
  const data = await fetchAPILogin(
    'POST',
    URL_API.AUTH.AUTH_CODE,
    {code: auth, phone: '55' + tel},
    null,
  );

  if (data?.status == 200) {
    const firstPair = ['@token', data.data.token];
    const secondPair = ['@refreshToken', data.data.refreshToken];
    await AsyncStorage.multiSet([firstPair, secondPair]);
    console.log('setei', data.data.token, data.data.refreshToken);

    return data;
  }
  return false;
}

export async function saveUserData(payload) {
  //try {
  const data = await fetchAPI('POST', URL_API.AUTH.REGISTER, null, payload);
  if (data?.status == 200) {
    return data;
  }
  return false;
  /*
  } catch (e) {
    return false;
  }*/
}

export async function addEmergencyContact(payload) {
  //try {
  const data = await fetchAPI('POST', '#', null, payload);
  if (data?.status == 200) {
    return data;
  }
  return false;
  /*
  } catch (e) {
    return false;
  }*/
}

export async function getUserData() {
  //try {
  const data = await fetchAPI('GET', URL_API.AUTH.GET_DATA, null, null);
  if (data?.status == 200) {
    return data;
  }
  return false;
  /*
  } catch (e) {
    return false;
  }*/
}

export async function logoutFetch() {
  return new Promise((resolve, reject) => {
    let aux = {
      status: 200,
    };

    return setTimeout(() => {
      return resolve(aux);
    }, 500);
  });
}

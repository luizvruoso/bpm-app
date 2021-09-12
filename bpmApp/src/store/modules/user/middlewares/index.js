import {fetchAPI} from '../../../../services/api';
import {URL_API} from '../../../../env';
export async function sendCodeTel(tel) {
  return fetchAPI(
    'POST',
    URL_API.AUTH.SEND_CODE,
    {phoneNumber: '55' + tel},
    null,
  )
    .then(ret => {
      if (ret) return ret;
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
  return fetchAPI(
    'POST',
    URL_API.AUTH.AUTH_CODE,
    {code: auth, phone: '55' + tel},
    null,
  )
    .then(ret => {
      if (ret) return ret;
      return false;
    })
    .catch(err => {
      return false;
    });
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

import axios from 'axios';
import {URL_API} from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN = axios.create({
  baseURL: URL_API.URL,
  headers: {
    Authorization: 'Basic ' + URL_API.CREDENTIALS.BASIC_AUTH,
    'Content-Type': 'application/json',
  },
});

const API = axios.create({
  baseURL: URL_API.URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchAPILogin(method, path, params = null, data = {}) {
  return await LOGIN({
    method: method,
    url: path,
    params: params,
    data: data,
    //withCredentials: true,
  })
    .then(function (response) {
      return response;
    })
    .catch(error => {
      console.error('FETCH API - ', error);
      return false;
    });
}

export async function fetchAPI(method, path, params = null, data = {}) {
  var BearerToken = null;
  try {
    BearerToken = await AsyncStorage.getItem('@token');
  } catch (e) {
    // error reading value
  }

  return await API({
    method: method,
    url: path,
    params: params,
    data: data,
    headers: {
      Authorization: 'Bearer ' + BearerToken,
    },
    //withCredentials: true,
  })
    .then(function (response) {
      return response;
    })
    .catch(error => {
      console.error('FETCH API - ', error);
      return false;
    });
}

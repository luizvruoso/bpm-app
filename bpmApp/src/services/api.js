import axios from 'axios';
import {URL_API} from '../env';

const API = axios.create({
  baseURL: URL_API.URL,
});

export async function fetchAPI(method, path, params = {}, data = {}) {
  return await API({
    method: method,
    url: path,
    params: params,
    data: data,
    header: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + URL_API.CREDENTIALS.BASIC_AUTH,
    },
  })
    .then(function (response) {
      return response;
    })
    .catch(error => {
      console.error('FETCH API - ', error);
      return false;
    });
}

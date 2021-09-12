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
      ContentType: 'application/json',
      Authorization: 'Bearer ' + URL_API.CREDENTIALS.BEARER_TOKEN,
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

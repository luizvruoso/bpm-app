import axios from 'axios';
import {URL_API} from '../env';
import axiosRetry from 'axios-retry';

const API = axios.create({
  baseURL: URL_API.URL,
});

axiosRetry(API, {
  retries: 1000,
  retryDelay: retryCount => {
    return 10000;
  },
  retryCondition: ret => {
    return true;
  },
});

export async function fetchAPI(method, path, params = {}, data = {}) {
  return await API({
    method,
    url: path,
    params,
    data,
    header: {
      ContentType: 'application/json',
      Authorization: 'Bearer ' + URL_API.CREDENTIALS.BEARER_TOKEN,
    },
  }).then(function (response){
      return response
  }).catch(error=>{
      console.error("FETCH API - ", error);
      return false;
  });
}

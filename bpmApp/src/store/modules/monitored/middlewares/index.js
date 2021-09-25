import {fetchAPI, fetchAPILogin} from '../../../../services/api';
import {URL_API} from '../../../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getContacts() {
  const data = await fetchAPI('GET', URL_API.MONITOR.GET_ALL, null, null);

  return data;
}

export async function sendStatusData(payload) {
  const data = await fetchAPI(
    'POST',
    URL_API.MONITOR.ADD_DATA_MONITORED,
    null,
    payload,
  );

  return data;
}

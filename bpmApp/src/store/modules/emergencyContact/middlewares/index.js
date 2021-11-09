import {fetchAPI, fetchAPILogin} from '../../../../services/api';
import {URL_API} from '../../../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addContact(payload) {
  const data = await fetchAPI(
    'POST',
    URL_API.MONITOR.ADD_MONITOR,
    null,
    payload,
  );

  return data;
}

export async function getContacts() {
  const data = await fetchAPI(
    'GET',
    URL_API.EMERGENCY_CONTACTS.GET_ALL,
    null,
    null,
  );

  return data;
}

export async function deleteContact(payload) {
  const data = await fetchAPI(
    'POST',
    URL_API.EMERGENCY_CONTACTS.DELETE,
    null,
    payload,
  );

  return data;
}

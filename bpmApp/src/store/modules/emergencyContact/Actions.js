import {addContact, getContacts} from './middlewares';
import {convertDate} from '../../../assets/utils';

export function addUserEmergencyContact(data) {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const payload = {responsible: [data]};

      const userData = await addContact(payload);

      const ret = await getContacts();

      dispatch(saveContacts(ret.data));

      //dispatch(saveContacts(ret.data.responsible));

      //console.log('user em', ret.data);
    } catch (err) {
      console.error(err);

      //return dispatch(failedLogin());
    }
  };
}

export function getEmergencyContacts() {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const data = await getContacts();

      dispatch(saveContacts(data.data));
    } catch (err) {
      console.error(err);

      //return dispatch(failedLogin());
    }
  };
}

function saveContacts(data) {
  return {
    type: 'REGISTER_CONTACT',
    payload: {
      data,
    },
  };
}

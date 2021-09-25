import {addContact, getContacts, sendStatusData} from './middlewares';
import {getUserLocation} from '../../../assets/utils';

export function getMonitoreds() {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const data = await getContacts();
      console.log('TRAAAADASDASDASDSA', data.data);

      dispatch(saveContacts(data.data));
    } catch (err) {
      console.error(err);

      //return dispatch(failedLogin());
    }
  };
}

export function sendUserStatusData(data) {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const userLocation = await getUserLocation();

      const payload = {
        heartBeat: data.heartBeat,
        status: 'not defined',
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        cardiacSteps: data.steps,
      };
      console.log('registro1u', payload);
      const ret = await sendStatusData(payload);

      console.log('registrou', ret.data);
      //dispatch(saveContacts(data.data));
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

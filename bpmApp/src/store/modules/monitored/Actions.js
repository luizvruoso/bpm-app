import {addContact, getContacts, sendStatusData} from './middlewares';
import {getUserLocation} from '../../../assets/utils';
import {setErrorMessage, setSuccessMessage} from '../user/Actions';

export function getMonitoreds() {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const data = await getContacts();

      dispatch(saveContacts(data.data));
    } catch (err) {
      console.error(err);
      dispatch(
        setErrorMessage('Erro ao recuperar dados. \n' + err.customMessage),
      );
      //return dispatch(failedLogin());
    }
  };
}

export function sendUserStatusData(data) {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      //console.log('gali antes');

      const userLocation = await getUserLocation();

      const payload = {
        heartBeat: data.heartBeat,
        status: 'Tudo parece bem',
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        cardiacSteps: data.steps,
      };

      const ret = await sendStatusData(payload);

      //console.log('ret', ret.data);

      //dispatch(saveContacts(data.data));
    } catch (err) {
      console.error(err);
      dispatch(
        setErrorMessage(
          'Erro ao enviar dados, tente novamente mais tarde. \n' +
            err.customMessage,
        ),
      );
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

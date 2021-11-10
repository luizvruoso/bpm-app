import {addContact, getContacts, deleteContact} from './middlewares';
import {convertDate} from '../../../assets/utils';
import {refreshUserInfo} from '../user/Actions';
import {setErrorMessage, setSuccessMessage} from '../user/Actions';

export function addUserEmergencyContact(data) {
  return async dispatch => {
    try {
      //const ret = await addEmergencyContact(data);
      const payload = {responsible: [data]};

      const userData = await addContact(payload);

      const ret = await getContacts();

      dispatch(saveContacts(ret.data));

      dispatch(refreshUserInfo());

      dispatch(setSuccessMessage('Sucesso!'));

      //dispatch(saveContacts(ret.data.responsible));

      //console.log('user em', ret.data);
    } catch (err) {
      console.error(err);
      dispatch(
        setErrorMessage(
          'Erro ao incluir contato, tente novamente. \n' + err.customMessage,
        ),
      );
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

      dispatch(
        setErrorMessage('Erro resgatar dados. Tente Novamente mais tarde.'),
      );
      //return dispatch(failedLogin());
    }
  };
}

export function deleteEmergencyContact(pay) {
  console.log("PAYLOAD2: ", pay)

  return async dispatch => {
    try {
      //console.log('chegou', {responsible: [data]});
      console.log("PAYLOAD: ", pay)

      const payload = {responsible: [pay]};
      console.log("PAYLOAD: ", pay)
      const data = await deleteContact(payload);

      dispatch(getEmergencyContacts());
    } catch (err) {
      console.error(err);

      dispatch(
        setErrorMessage(
          'Erro deletar contato de emergência. Tente Novamente mais tarde.',
        ),
      );
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

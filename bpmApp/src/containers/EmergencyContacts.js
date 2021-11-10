import {connect} from 'react-redux';
import EmergencyContacts from '../screens/EmergencyContacts';
import {
  addUserEmergencyContact,
  getEmergencyContacts,
  deleteEmergencyContact,
} from '../store/modules/emergencyContact/Actions';

const mapStateToProps = state => {
  return {user: state.user, emergencyContact: state.emergencyContact};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    addUserEmergencyContact: token => {
      return dispatch(addUserEmergencyContact(token));
    },
    getEmergencyContacts: () => {
      return dispatch(getEmergencyContacts());
    },
    deleteEmergencyContact: data => {
      console.log("Dispatch Data: ", data)
      return dispatch(deleteEmergencyContact(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContacts);

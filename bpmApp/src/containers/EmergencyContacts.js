import {connect} from 'react-redux';
import EmergencyContacts from '../screens/EmergencyContacts';
import {addUserEmergencyContact} from '../store/modules/user/Actions';

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    addUserEmergencyContact: token => {
      return dispatch(addUserEmergencyContact(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContacts);

import {connect} from 'react-redux';
import DetailsMonitor from '../screens/DetailsMonitor';
import {} from '../store/modules/user/Actions';
import {addUserEmergencyContact} from '../store/modules/emergencyContact/Actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsMonitor);

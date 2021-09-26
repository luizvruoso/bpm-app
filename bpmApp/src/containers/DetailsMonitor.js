import {connect} from 'react-redux';
import DetailsMonitor from '../screens/DetailsMonitor';
import {} from '../store/modules/user/Actions';
import {addUserEmergencyContact} from '../store/modules/emergencyContact/Actions';
import {getMonitoreds} from '../store/modules/monitored/Actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    emergencyContact: state.emergencyContact,
    monitored: state.monitored,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
    addUserEmergencyContact: token => {
      return dispatch(addUserEmergencyContact(token));
    },
    getMonitoreds: () => {
      return dispatch(getMonitoreds());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsMonitor);

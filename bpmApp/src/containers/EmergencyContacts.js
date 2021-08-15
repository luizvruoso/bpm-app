import {connect} from 'react-redux';
import EmergencyContacts from '../screens/EmergencyContacts';

const mapStateToProps = state => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onInit: () => {
      return;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContacts);
